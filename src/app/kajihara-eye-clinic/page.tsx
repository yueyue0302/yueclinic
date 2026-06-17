import type { Metadata } from 'next';
import Link from 'next/link';

const kajiharaUrl = 'https://mabuta1.com';

export const metadata: Metadata = {
  title: '梶原アイクリニック紹介のための受診｜眼瞼下垂・眼瞼皮膚弛緩',
  description:
    '福岡の梶原アイクリニックで眼瞼下垂や眼瞼皮膚弛緩の手術を希望する方向けに、ゆえクリニックで事前確認と手術日調整を行う受診について説明します。',
  alternates: {
    canonical: '/kajihara-eye-clinic',
  },
  openGraph: {
    title: '梶原アイクリニック紹介のための受診｜yueclinic',
    description:
      '梶原アイクリニックでの眼瞼下垂・眼瞼皮膚弛緩手術を検討する方向けの遠隔初診、術後抜糸、料金体系の説明です。',
    url: 'https://yueclinic.com/kajihara-eye-clinic',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'ゆえクリで眼瞼下垂の保険手術はできますか？',
    answer:
      'ゆえクリニックは自由診療のみです。保険診療での眼瞼下垂手術を希望される場合は、梶原アイクリニックでの診療をご案内する形になります。',
  },
  {
    question: '裏からの眼瞼下垂手術はどこで受けられますか？',
    answer:
      'まぶたの裏側から行う眼瞼下垂手術を希望される場合は、梶原アイクリニックでの対応になります。ゆえクリでは、眉下切開などのまぶたのたるみ取りは相談可能です。',
  },
  {
    question: 'ゆえクリの通常手術でも診察料や抜糸代がかかりますか？',
    answer:
      '通常のゆえクリ美容外科手術では、診察料および当院術後の抜糸代は施術料金に含まれており無料です。梶原アイクリニック紹介関連の受診料・抜糸料は別枠です。',
  },
];

export default function KajiharaEyeClinicPage() {
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
        name: '梶原アイクリニック紹介のための受診',
        item: 'https://yueclinic.com/kajihara-eye-clinic',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <main className="section fade-in" style={{ maxWidth: '900px', margin: '1.5rem auto 4rem' }}>
        <p style={{ color: 'var(--color-button)', fontWeight: 700, textAlign: 'center', marginBottom: '0.6rem' }}>
          眼瞼下垂・眼瞼皮膚弛緩の紹介受診
        </p>
        <h1 className="section__title" style={{ marginBottom: '1.2rem', fontSize: '1.7rem', lineHeight: 1.45 }}>
          梶原アイクリニックでの手術を希望される方へ
        </h1>

        <p style={{ color: '#555', lineHeight: 1.9, marginBottom: '2rem' }}>
          福岡の
          <a href={kajiharaUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-button)', fontWeight: 700 }}>
            梶原アイクリニック
          </a>
          で、保険診療または自由診療による眼瞼下垂・眼瞼皮膚弛緩の手術を希望している方向けに、ゆえクリニックで事前確認を行う受診枠です。
          適応や必要な検査を確認し、条件が合えば当院から手術日の予約まで進められます。
        </p>

        <section
          style={{
            background: '#fdfdf9',
            border: '1px solid var(--color-accent-light)',
            borderRadius: '8px',
            padding: '1.2rem',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ color: 'var(--color-button)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
            料金
          </h2>
          <div style={{ display: 'grid', gap: '0.8rem' }}>
            <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', padding: '1rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>梶原アイクリニック紹介のための受診</h3>
              <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '0.35rem' }}>初診料・検査代含む</p>
              <p style={{ color: 'var(--color-button)', fontWeight: 700, fontSize: '1.15rem' }}>¥3,000</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', padding: '1rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>梶原アイクリニックで手術後の抜糸</h3>
              <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '0.35rem' }}>梶原アイクリニックで手術を受けた方向け</p>
              <p style={{ color: 'var(--color-button)', fontWeight: 700, fontSize: '1.15rem' }}>¥4,000</p>
            </div>
          </div>
          <p style={{ color: '#666', lineHeight: 1.8, fontSize: '0.9rem', marginTop: '1rem' }}>
            ※通常のゆえクリ美容外科手術では、診察料および当院術後の抜糸代は施術料金に含まれており無料です。
            上記は梶原アイクリニック紹介関連の受診・術後抜糸に限る別枠料金です。
          </p>
        </section>

        <section style={{ marginBottom: '2.3rem' }}>
          <h2 style={{ color: 'var(--color-button)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
            この受診でできること
          </h2>
          <div style={{ display: 'grid', gap: '0.85rem' }}>
            {[
              ['1. 手術適応の事前確認', 'まぶたの開き、皮膚の余り、左右差、既往歴、内服薬などを確認します。保険適用の可否は、最終的には梶原アイクリニックでの診断に基づきます。'],
              ['2. 遠隔初診としての情報整理', '福岡まで初診だけで移動する負担を減らすため、当院で所見を整理し、紹介に必要な情報を確認します。'],
              ['3. 手術日の予約調整', '適応があり、梶原アイクリニック側の手術枠と診療判断が合えば、当院でワンストップに近い形で手術日予約まで進められます。'],
              ['4. 術後抜糸', '梶原アイクリニックで手術を受けた後、抜糸をゆえクリで行える場合があります。遠方通院の負担を減らしたい方向けです。'],
            ].map(([title, body]) => (
              <article
                key={title}
                className="column-card"
                style={{ cursor: 'default', padding: '1.15rem', borderLeft: '4px solid var(--color-button)' }}
              >
                <h3 style={{ color: '#3e3832', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</h3>
                <p style={{ color: '#555', lineHeight: 1.8 }}>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '2.3rem' }}>
          <h2 style={{ color: 'var(--color-button)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
            ゆえクリと梶原アイクリニックの違い
          </h2>
          <p style={{ color: '#555', lineHeight: 1.9, marginBottom: '0.9rem' }}>
            ゆえクリニックは自由診療のみの目元専門美容外科です。一方、梶原アイクリニックでは眼瞼下垂や眼瞼皮膚弛緩に対して、状態により保険診療または自由診療での手術が検討されます。
          </p>
          <p style={{ color: '#555', lineHeight: 1.9, marginBottom: '0.9rem' }}>
            料金体系は異なりますが、福岡まで初診・手術・抜糸で複数回移動する交通費や時間を考えると、千葉・東京近郊で事前確認や抜糸ができる方が現実的な場合があります。
          </p>
          <p style={{ color: '#555', lineHeight: 1.9 }}>
            裏側からの眼瞼下垂手術を希望される場合は、梶原アイクリニックでの対応になります。まぶたの皮膚のたるみ取り、眉下切開、自由診療での自然な目元の相談は、ゆえクリでも対応しています。
          </p>
        </section>

        <section
          style={{
            background: '#fff',
            border: '1px solid var(--color-accent-light)',
            borderRadius: '8px',
            padding: '1.2rem',
            marginBottom: '2.3rem',
          }}
        >
          <h2 style={{ color: 'var(--color-button)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
            手術担当について
          </h2>
          <p style={{ color: '#555', lineHeight: 1.9 }}>
            梶原アイクリニックでの手術担当は、高木医師または小林医師です。最終的な術式、保険診療・自由診療の扱い、手術担当、手術日は梶原アイクリニック側の診察と予約状況により決まります。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--color-button)', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
            関連コラム
          </h2>
          <Link href="/columns/ganken-kasui-surgery-approach" className="column-card hover-up" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <h3 style={{ color: 'var(--color-button)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
              眼瞼下垂手術｜「表から」と「裏から」どちらが適切？
            </h3>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              皮膚側から行う手術と、まぶたの裏側から行う手術の違いを整理しています。
            </p>
          </Link>
        </section>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={kajiharaUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            梶原アイクリニック公式サイト
          </a>
          <Link href="/prices" className="btn btn--outline">
            料金表に戻る
          </Link>
          <a href="https://lin.ee/VqhBREq" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            LINEで相談する
          </a>
        </div>
      </main>
    </>
  );
}
