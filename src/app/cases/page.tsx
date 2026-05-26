import Link from 'next/link';
import type { Metadata } from 'next';

const instagramUrl = 'https://www.instagram.com/dr_kobayashi';

export const metadata: Metadata = {
  title: '症例写真・経過',
  description:
    'yueclinic（ゆえクリニック）の目元整形症例写真・経過の見方。二重埋没法、二重切開・眼瞼下垂、クマ取り、タレ目形成・目尻切開の症例はInstagramでも公開しています。',
  alternates: {
    canonical: '/cases',
  },
  openGraph: {
    title: '症例写真・経過 | yueclinic',
    description: '目元専門美容外科の症例写真、料金、リスク、経過の見方をまとめたページです。',
    url: 'https://yueclinic.com/cases',
    type: 'article',
  },
};

const caseGroups = [
  {
    title: '二重埋没法',
    href: '/menus/futae_maibotsu',
    price: 'モニター価格 ¥68,000',
    risk: '腫れ、内出血、左右差、後戻り、違和感など',
    downtime: '腫れは数日〜1週間程度が目安です。',
    postUrl: 'https://www.instagram.com/p/DOq99U5krkZ/',
  },
  {
    title: '二重切開・眼瞼下垂',
    href: '/menus/sekkai_ganken',
    price: 'モニター価格 ¥180,000〜',
    risk: '腫れ、内出血、左右差、傷跡、違和感など',
    downtime: '強い腫れは1〜2週間程度、完成までは数ヶ月が目安です。',
    postUrl: 'https://www.instagram.com/p/DPVbfPXkkBH/',
  },
  {
    title: 'クマ取り',
    href: '/menus/kuma_tori',
    price: 'モニター価格 ¥80,000〜',
    risk: '腫れ、内出血、左右差、凹み、ふくらみの残存など',
    downtime: '腫れや内出血は数日〜2週間程度が目安です。',
    postUrl: 'https://www.instagram.com/p/C7WBWMkOvZ7/',
  },
  {
    title: 'タレ目形成・目尻切開',
    href: '/menus/mejiri_tareme',
    price: 'モニター価格 ¥40,000〜',
    risk: '腫れ、内出血、左右差、後戻り、傷跡など',
    downtime: '腫れや赤みは1〜2週間程度が目安です。',
    postUrl: 'https://www.instagram.com/p/C6s69BwPtGF/',
  },
];

export default function Cases() {
  const itemListStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'yueclinic 症例写真・経過',
    itemListElement: caseGroups.map((caseGroup, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: caseGroup.title,
      url: `https://yueclinic.com${caseGroup.href}`,
    })),
  };

  return (
    <article className="section fade-in" style={{ minHeight: '60vh', marginTop: '1rem', maxWidth: '1000px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListStructuredData) }}
      />

      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="section__title" style={{ marginBottom: '1rem' }}>症例写真・経過</h1>
        <p style={{ lineHeight: 1.9, color: '#444', maxWidth: '760px', margin: '0 auto' }}>
          目元の症例写真は、最新の投稿をInstagramでも公開しています。
          ここでは、施術ごとの料金、リスク、ダウンタイムの目安とあわせて、症例を見るときのポイントを整理しています。
        </p>
      </header>

      <section style={{ marginBottom: '3rem', background: '#fdfdf9', border: '1px solid var(--color-accent-light)', borderRadius: '8px', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.35rem', color: 'var(--color-button)', marginBottom: '1rem' }}>
          症例写真を見るときの注意点
        </h2>
        <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.9, color: '#444' }}>
          <li>術直後、1週間、1ヶ月、3ヶ月では見え方が変わります。</li>
          <li>同じ施術でも、まぶたの厚み・皮膚の余り・左右差によって仕上がりは異なります。</li>
          <li>症例写真は参考情報です。適応や術式は診察で個別に判断します。</li>
          <li>料金は施術内容により変わるため、各メニューページの総額表示もご確認ください。</li>
        </ul>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        {caseGroups.map((caseGroup) => (
          <div key={caseGroup.title} className="column-card" style={{ padding: '1.25rem' }}>
            <h2 style={{ color: 'var(--color-button)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
              {caseGroup.title}
            </h2>
            <div style={{ borderRadius: '8px', border: '1px solid var(--color-accent-light)', marginBottom: '1rem', background: '#fdfdf9', minHeight: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', textAlign: 'center' }}>
              <div>
                <div style={{ color: 'var(--color-button)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Instagram症例
                </div>
                <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                  写真の経過・詳しい見え方は公式Instagramでご確認ください。
                </p>
                <a href={caseGroup.postUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-button)', textDecoration: 'underline', textUnderlineOffset: '4px', fontWeight: 700 }}>
                  この症例投稿を見る
                </a>
              </div>
            </div>
            <div style={{ fontSize: '0.92rem', color: '#444', lineHeight: 1.8, marginBottom: '1rem' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>料金:</strong> {caseGroup.price}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>ダウンタイム:</strong> {caseGroup.downtime}</p>
              <p style={{ marginBottom: 0 }}><strong>主なリスク:</strong> {caseGroup.risk}</p>
            </div>
            <Link href={caseGroup.href} className="btn btn--outline" style={{ width: '100%', padding: '0.8rem 1rem' }}>
              施術詳細を見る
            </Link>
          </div>
        ))}
      </section>

      <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          Instagramで最新症例を見る
        </a>
        <Link href="/reasons" className="btn btn--outline">
          ゆえクリが選ばれる理由
        </Link>
      </div>
    </article>
  );
}
