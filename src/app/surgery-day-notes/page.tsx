import Link from 'next/link';
import type { Metadata } from 'next';

const reserveUrl = 'https://lin.ee/VqhBREq';

export const metadata: Metadata = {
  title: '手術当日の注意｜眼鏡・コンタクトレンズについて',
  description:
    'yueclinic（ゆえクリニック）の目元手術当日の注意。手術当日は眼鏡を持参し、コンタクトレンズは術後6日間使用を控えてください。',
  alternates: {
    canonical: '/surgery-day-notes',
  },
  openGraph: {
    title: '手術当日の注意｜yueclinic',
    description: '目元手術当日の持ち物、眼鏡、コンタクトレンズ再開の目安をまとめました。',
    url: 'https://yueclinic.com/surgery-day-notes',
    type: 'article',
  },
};

const checklist = [
  '手術当日は眼鏡を持ってきてください',
  'コンタクトレンズは術後6日間×',
  '帰宅時はコンタクトではなく眼鏡がおすすめです',
  '目元を強くこすらず、当日はできるだけ安静にしてください',
];

const relatedMenus = [
  { label: '二重埋没法', href: '/menus/futae_maibotsu' },
  { label: '二重切開・眼瞼下垂', href: '/menus/sekkai_ganken' },
  { label: '眉下切開', href: '/menus/mayushita_sekka' },
  { label: 'クマ取り', href: '/menus/kuma_tori' },
  { label: '目頭切開', href: '/menus/megashira_sekkai' },
  { label: 'タレ目形成・目尻切開', href: '/menus/mejiri_tareme' },
];

export default function SurgeryDayNotesPage() {
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: '手術当日の注意',
    url: 'https://yueclinic.com/surgery-day-notes',
    about: '目元手術当日の眼鏡持参とコンタクトレンズ使用制限',
    publisher: {
      '@type': 'MedicalClinic',
      name: 'yueclinic（ゆえクリニック）',
      url: 'https://yueclinic.com',
    },
  };

  return (
    <article className="section fade-in" style={{ maxWidth: '860px', marginTop: '1rem', paddingTop: '1.5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p style={{ color: 'var(--color-button)', fontWeight: 600, marginBottom: '0.8rem' }}>
          手術当日に忘れやすいポイント
        </p>
        <h1 className="section__title" style={{ marginBottom: '1.2rem' }}>
          手術当日の注意
        </h1>
        <p style={{ lineHeight: 1.9, color: '#444', maxWidth: '680px', margin: '0 auto' }}>
          目元の手術では、当日の見え方や術後の刺激を減らすため、眼鏡とコンタクトレンズの扱いが大切です。
          ご来院前に一度ご確認ください。
        </p>
      </header>

      <section style={{ background: '#fdfdf9', border: '1px solid var(--color-accent-light)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--color-button)', marginBottom: '1rem' }}>
          当日のチェック
        </h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'grid', gap: '0.8rem' }}>
          {checklist.map((item) => (
            <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#444', lineHeight: 1.7 }}>
              <span style={{ color: 'var(--color-button)', fontWeight: 700 }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="column-post__content">
        <h2>眼鏡を持ってきてください</h2>
        <p>
          手術当日は、コンタクトレンズを外してお帰りいただくことがあります。
          普段コンタクト中心の方も、帰宅時に困らないように眼鏡を持参してください。
        </p>

        <h2>コンタクトレンズは術後6日間控えてください</h2>
        <p>
          二重埋没法、切開系の手術、クマ取り、眉下切開、眼瞼下垂など、目元の手術後はまぶたや結膜に刺激を与えないことが大切です。
          原則としてコンタクトレンズは術後6日間使用しないでください。
        </p>
        <p>
          再開のタイミングは、術式や腫れ、傷の状態によって変わることがあります。
          迷う場合は、術後診察やLINEで確認してから再開してください。
        </p>

        <h2>対象になりやすい施術</h2>
        <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {relatedMenus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              style={{
                border: '1px solid var(--color-accent-light)',
                borderRadius: '999px',
                padding: '0.45rem 0.85rem',
                color: 'var(--color-button)',
                background: '#fff',
                fontSize: '0.9rem',
              }}
            >
              {menu.label}
            </Link>
          ))}
        </div>

        <h2>当日不安なとき</h2>
        <p>
          服用中のお薬、体調不良、目の充血、コンタクトレンズの使用状況などで不安がある場合は、来院前にご相談ください。
          安全に手術を受けていただけるよう、必要に応じて当日の状態を確認します。
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href={reserveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          LINEで確認する
        </a>
        <Link href="/prices" className="btn btn--outline">
          料金表を見る
        </Link>
      </div>
    </article>
  );
}
