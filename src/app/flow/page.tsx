import type { Metadata } from 'next';
import Link from 'next/link';

const lineUrl = 'https://lin.ee/VqhBREq';

export const metadata: Metadata = {
  title: '初診から手術までの流れ｜LINE予約・当日施術・術後フォロー',
  description:
    'ゆえクリニックの初診予約からカウンセリング、見積り、手術、術後フォローまでの流れをまとめました。LINE予約、当日施術の相談、支払い、手術当日の注意も確認できます。',
  alternates: {
    canonical: '/flow',
  },
  openGraph: {
    title: '初診から手術までの流れ｜yueclinic',
    description:
      'LINE予約からカウンセリング、見積り、手術、術後フォローまで。目元手術を検討する方へ、来院前に知っておきたい流れをまとめました。',
    url: 'https://yueclinic.com/flow',
  },
};

const steps = [
  {
    title: '1. LINEで相談・予約',
    body: '公式LINEから、ご希望の施術、相談したい内容、当日施術希望の有無をお送りください。空き状況を確認し、来院日時をご案内します。',
  },
  {
    title: '2. 来院前の確認',
    body: '二重埋没法、眉下切開、クマ取りなど、手術内容により当日の持ち物やコンタクトレンズの制限が変わります。不安な点はLINEで事前に確認できます。',
  },
  {
    title: '3. 問診・カウンセリング',
    body: '目元の悩み、希望の仕上がり、過去の手術歴、ダウンタイムの希望を確認します。無理に当日施術をすすめることはありません。',
  },
  {
    title: '4. 診察・デザイン・見積り',
    body: '院長がまぶたや目の下の状態を診察し、適応、向いている術式、リスク、ダウンタイムを説明します。必要な費用は総額で確認できます。',
  },
  {
    title: '5. お支払い・同意書',
    body: '施術内容と費用に納得いただいた場合のみ、同意書の確認とお支払いへ進みます。見積りだけで持ち帰って検討することも可能です。',
  },
  {
    title: '6. 手術',
    body: 'カウンセリングで決めた内容をもとに、院長が手術を担当します。目元手術は一人ひとりの左右差や皮膚の状態を見ながら進めます。',
  },
  {
    title: '7. 帰宅・当日の注意',
    body: '手術後は注意点を確認してからご帰宅いただきます。目元手術当日は、眼鏡の持参やコンタクトレンズの休止が必要になることがあります。',
  },
  {
    title: '8. 術後フォロー・抜糸',
    body: '腫れ、内出血、左右差の見え方など、術後に気になることはLINEや診察で確認できます。抜糸が必要な手術では、医師が状態を確認します。',
  },
];

const faqItems = [
  {
    question: 'カウンセリング当日に手術できますか？',
    answer:
      '予約状況と診察結果により可能です。当日施術を希望される場合は、LINE予約時にその旨をお知らせください。',
  },
  {
    question: '相談だけ、見積りだけでも大丈夫ですか？',
    answer:
      '大丈夫です。診察後に持ち帰って検討していただけます。ゆえクリニックでは、不要な施術や高額プランへの誘導は行いません。',
  },
  {
    question: '当日持って行くものはありますか？',
    answer:
      '目元手術では眼鏡の持参をおすすめします。コンタクトレンズは術式により休止期間がありますので、手術当日の注意ページもご確認ください。',
  },
];

export default function FlowPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yueclinic.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '初診から手術までの流れ',
        item: 'https://yueclinic.com/flow',
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <main className="section fade-in" style={{ maxWidth: '900px', margin: '1.5rem auto 4rem' }}>
        <p style={{ color: 'var(--color-button)', fontWeight: 700, textAlign: 'center', marginBottom: '0.6rem' }}>
          はじめての方へ
        </p>
        <h1 className="section__title" style={{ marginBottom: '1rem', fontSize: '1.75rem', letterSpacing: 0, lineHeight: 1.35 }}>
          <span style={{ display: 'block' }}>初診から手術までの</span>
          <span style={{ display: 'block' }}>流れ</span>
        </h1>
        <p style={{ maxWidth: '720px', margin: '0 auto 2rem', color: '#555', lineHeight: 1.9, textAlign: 'left' }}>
          yueclinicでは、目元専門の院長がカウンセリングから手術、術後フォローまで一貫して担当します。
          LINE予約から来院、見積り、手術当日、術後の確認まで、来院前に知っておきたい流れをまとめました。
        </p>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0.85rem',
            marginBottom: '2rem',
          }}
        >
          <Link href="/prices" className="column-card hover-up" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 style={{ color: 'var(--color-button)', fontSize: '1.05rem', marginBottom: '0.45rem' }}>料金を確認</h2>
            <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.92rem' }}>
              二重埋没法、眉下切開、クマ取りなどの料金を一覧で確認できます。
            </p>
          </Link>
          <Link href="/surgery-day-notes" className="column-card hover-up" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 style={{ color: 'var(--color-button)', fontSize: '1.05rem', marginBottom: '0.45rem' }}>当日の注意</h2>
            <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.92rem' }}>
              眼鏡、コンタクトレンズ、手術当日の過ごし方をまとめています。
            </p>
          </Link>
          <Link href="/access" className="column-card hover-up" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 style={{ color: 'var(--color-button)', fontSize: '1.05rem', marginBottom: '0.45rem' }}>アクセス</h2>
            <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.92rem' }}>
              京成線「鬼越駅」から徒歩20秒。市川・本八幡・船橋からも通いやすい立地です。
            </p>
          </Link>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-button)' }}>
            予約から術後まで
          </h2>
          <div style={{ display: 'grid', gap: '0.85rem' }}>
            {steps.map((step) => (
              <article
                key={step.title}
                className="column-card"
                style={{
                  cursor: 'default',
                  padding: '1.2rem',
                  borderLeft: '4px solid var(--color-button)',
                }}
              >
                <h3 style={{ fontSize: '1.02rem', marginBottom: '0.45rem', color: '#3e3832' }}>{step.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.85, fontSize: '0.95rem' }}>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          style={{
            background: '#fdfdf9',
            border: '1px solid var(--color-accent-light)',
            borderRadius: '8px',
            padding: '1.2rem',
            marginBottom: '2.5rem',
          }}
        >
          <h2 style={{ color: 'var(--color-button)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
            当日施術を希望される方へ
          </h2>
          <p style={{ color: '#555', lineHeight: 1.85 }}>
            当日施術は、予約枠、診察結果、体調、必要な確認事項がそろった場合にご案内できます。
            未成年の方、既往歴や内服薬がある方、他院修正のご相談などでは、事前確認や別日手術をご提案する場合があります。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-button)' }}>
            よくある確認
          </h2>
          <div className="faq-list" style={{ boxShadow: 'none', border: '1px solid var(--color-accent-light)' }}>
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary className="faq-question">{item.question}</summary>
                <div className="faq-answer">{item.answer}</div>
              </details>
            ))}
          </div>
        </section>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            LINEで相談・予約する
          </a>
          <Link href="/faq" className="btn btn--outline">
            よくある質問を見る
          </Link>
        </div>
      </main>
    </>
  );
}
