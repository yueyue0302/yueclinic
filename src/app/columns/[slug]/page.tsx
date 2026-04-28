import { getColumnData } from '../../../lib/columns';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Read route params properly before using in App Router
  const resolvedParams = await Promise.resolve(params);
  const columnData = await getColumnData(resolvedParams.slug);
  return {
    title: `${columnData.title} | yueclinic`,
  };
}

export default async function ColumnPost({ params }: { params: { slug: string } }) {
  // Read route params properly before using in App Router
  const resolvedParams = await Promise.resolve(params);
  const columnData = await getColumnData(resolvedParams.slug);

  return (
    <article className="section column-post fade-in" style={{ marginTop: '2rem', maxWidth: '800px' }}>
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
