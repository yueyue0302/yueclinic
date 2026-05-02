import Link from 'next/link';
import { getSortedColumnsData } from '../../lib/columns';

export const metadata = {
  title: '院長のつぶやき',
};

export const dynamic = 'force-static';

export default function Columns() {
  const allColumnsData = getSortedColumnsData();

  return (
    <div className="section" style={{ minHeight: '60vh', marginTop: '2rem' }}>
      <h1 className="section__title">院長のつぶやき</h1>
      <div className="columns-list fade-in">
        {allColumnsData.length === 0 ? (
          <p style={{ textAlign: 'center' }}>現在、投稿はありません。</p>
        ) : (
          allColumnsData.map(({ slug, date, title, category }) => (
            <div key={slug} className="column-card">
              <Link href={`/columns/${slug}`}>
                <div className="column-card__meta">
                  <span className="column-card__date">{date}</span>
                  {category && <span className="column-card__category">{category}</span>}
                </div>
                <h3 className="column-card__title">{title}</h3>
              </Link>
            </div>
          ))
        )}
      </div>
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link href="/" className="btn btn--outline">
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
