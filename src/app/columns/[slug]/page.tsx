import { getColumnData, getSortedColumnsData } from '../../../lib/columns';
import Link from 'next/link';

export const dynamic = 'force-static';

function toPlainText(html: string) {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

export async function generateStaticParams() {
  const posts = getSortedColumnsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Read route params properly before using in App Router
  const resolvedParams = await Promise.resolve(params);
  const columnData = await getColumnData(resolvedParams.slug);
  const description = toPlainText(columnData.contentHtml).slice(0, 150);
  return {
    title: `${columnData.title} | yueclinic`,
    description,
    alternates: {
      canonical: `/columns/${resolvedParams.slug}`,
    },
    openGraph: {
      title: columnData.title,
      description,
      url: `https://yueclinic.com/columns/${resolvedParams.slug}`,
      type: 'article',
    },
  };
}

export default async function ColumnPost({ params }: { params: { slug: string } }) {
  // Read route params properly before using in App Router
  const resolvedParams = await Promise.resolve(params);
  const columnData = await getColumnData(resolvedParams.slug);
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: columnData.title,
    datePublished: columnData.date,
    dateModified: columnData.date,
    author: {
      '@type': 'Person',
      name: '小林佑紀',
    },
    publisher: {
      '@type': 'MedicalClinic',
      name: 'yueclinic（ゆえクリニック）',
      url: 'https://yueclinic.com',
    },
    mainEntityOfPage: `https://yueclinic.com/columns/${resolvedParams.slug}`,
    articleSection: columnData.category || '院長のつぶやき',
    description: toPlainText(columnData.contentHtml).slice(0, 150),
  };

  return (
    <article className="section column-post fade-in" style={{ marginTop: '2rem', maxWidth: '800px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <header className="column-post__header">
        <h1 className="column-post__title">{columnData.title}</h1>
        <div className="column-post__meta">
          <span className="column-post__date">{columnData.date}</span>
          {columnData.category && <span className="column-post__category">{columnData.category}</span>}
        </div>
      </header>
      <div 
        className="column-post__content"
        dangerouslySetInnerHTML={{ __html: columnData.contentHtml }} 
      />
      <div style={{ marginTop: '5rem', textAlign: 'center' }}>
        <Link href="/columns" className="btn btn--outline">
          コラム一覧に戻る
        </Link>
      </div>
    </article>
  );
}
