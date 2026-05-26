import Link from 'next/link';
import type { Metadata } from 'next';

const reserveUrl = 'https://lin.ee/VqhBREq';

export const metadata: Metadata = {
  title: 'アクセス｜鬼越駅徒歩約2分・市川/本八幡/船橋から通いやすい目元専門美容外科',
  description:
    'yueclinic（ゆえクリニック）へのアクセス。京成本線「鬼越駅」徒歩約2分。京成八幡（本八幡）から1駅、京成船橋から3駅。市川・船橋・下総中山・津田沼エリアから通いやすい目元専門美容外科です。',
  alternates: {
    canonical: '/access',
  },
  openGraph: {
    title: 'アクセス｜yueclinic（ゆえクリニック）',
    description: '鬼越駅徒歩約2分。市川・本八幡・船橋から通いやすい目元専門美容外科です。',
    url: 'https://yueclinic.com/access',
    type: 'article',
  },
};

const routes = [
  ['京成八幡（本八幡）', '京成本線で1駅', '約2分'],
  ['京成船橋', '京成本線で3駅', '約8分'],
  ['京成中山・下総中山', '京成本線で1駅', '約2分'],
  ['市川真間', '京成本線で2駅', '約4分'],
  ['京成津田沼', '京成本線で乗り換えなし', '約15分'],
];

export default function AccessPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'トップ',
        item: 'https://yueclinic.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'アクセス',
        item: 'https://yueclinic.com/access',
      },
    ],
  };

  return (
    <article className="section fade-in" style={{ maxWidth: '900px', marginTop: '1rem', paddingTop: '1.5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ color: 'var(--color-button)', fontWeight: 600, marginBottom: '0.8rem' }}>
          市川・本八幡・船橋から通いやすい目元専門美容外科
        </p>
        <h1 className="section__title" style={{ marginBottom: '1.2rem' }}>
          アクセス
        </h1>
        <p style={{ lineHeight: 1.9, color: '#444', maxWidth: '720px', margin: '0 auto' }}>
          yueclinic（ゆえクリニック）は、京成本線「鬼越駅」から徒歩約2分の場所にあります。
          本八幡・船橋・市川・下総中山エリアからも通いやすく、術後の経過観察にも来院しやすい立地です。
        </p>
      </header>

      <section style={{ marginBottom: '3rem', background: '#fdfdf9', border: '1px solid var(--color-accent-light)', borderRadius: '8px', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.35rem', color: 'var(--color-button)', marginBottom: '1rem' }}>
          住所
        </h2>
        <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1rem' }}>
          〒272-0815 千葉県市川市北方1-9-14-2F
        </p>
        <p style={{ lineHeight: 1.9, color: '#444', marginBottom: 0 }}>
          鬼越駅の改札を出て右へ進み、線路を渡って薬局の左側にある青っぽいビルの2階です。
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.35rem', color: 'var(--color-button)', marginBottom: '1rem', textAlign: 'center' }}>
          主要駅からの目安
        </h2>
        <div style={{ overflowX: 'auto', border: '1px solid var(--color-accent-light)', borderRadius: '8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px', background: '#fff' }}>
            <tbody>
              <tr style={{ background: 'var(--color-bg)' }}>
                {['出発駅', 'ルート', '電車の目安'].map((heading) => (
                  <td key={heading} style={{ padding: '1rem', color: 'var(--color-button)', fontWeight: 700, borderBottom: '1px solid var(--color-accent-light)' }}>
                    {heading}
                  </td>
                ))}
              </tr>
              {routes.map((route) => (
                <tr key={route[0]}>
                  {route.map((cell) => (
                    <td key={cell} style={{ padding: '1rem', color: '#444', lineHeight: 1.7, borderBottom: '1px solid var(--color-accent-light)' }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.35rem', color: 'var(--color-button)', marginBottom: '1rem', textAlign: 'center' }}>
          地図
        </h2>
        <div className="map-container hover-up">
          <iframe
            src="https://maps.google.co.jp/maps?q=yue+clinic%E3%80%90%E3%83%A6%E3%82%A8%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF%E3%80%91&z=17&output=embed"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="yueclinic（ゆえクリニック）の地図"
          />
        </div>
      </section>

      <section style={{ marginBottom: '3rem', background: '#fdfdf9', border: '1px solid var(--color-accent-light)', borderRadius: '8px', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.35rem', color: 'var(--color-button)', marginBottom: '1rem' }}>
          術後の通院について
        </h2>
        <p style={{ lineHeight: 1.9, color: '#444', marginBottom: 0 }}>
          目元の手術では、腫れや内出血の経過、抜糸、左右差の確認など、術後に相談したくなる場面があります。
          通いやすい距離にあることは、手術後の安心感にもつながります。
        </p>
      </section>

      <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={reserveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          LINEで空き状況を確認
        </a>
        <Link href="/reasons" className="btn btn--outline">
          ゆえクリが選ばれる理由
        </Link>
      </div>
    </article>
  );
}
