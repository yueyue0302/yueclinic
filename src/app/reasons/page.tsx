import Link from 'next/link';
import type { Metadata } from 'next';

const reserveUrl = 'https://lin.ee/VqhBREq';

export const metadata: Metadata = {
  title: '市川・船橋で目元整形を相談するなら｜ゆえクリが選ばれる理由',
  description:
    '市川・本八幡・船橋エリアで二重整形、クマ取り、眉下切開、眼瞼下垂を比較する方向けに、yueclinic（ゆえクリニック）の専門性、料金、担当医、通院しやすさを整理しました。',
  alternates: {
    canonical: '/reasons',
  },
  openGraph: {
    title: '市川・船橋で目元整形を相談するなら｜ゆえクリが選ばれる理由',
    description:
      '目元専門、院長一貫対応、手術用顕微鏡、ワンプライス制。ゆえクリニックを比較検討しやすいように整理したページです。',
    url: 'https://yueclinic.com/reasons',
    type: 'article',
  },
};

const strengths = [
  {
    title: '目元専門',
    body: '二重埋没法、眼瞼下垂、眉下切開、クマ取りなど、目元の美容外科・眼形成に診療領域を絞っています。',
  },
  {
    title: '院長が一貫対応',
    body: 'カウンセリング、施術、抜糸、アフターケアまで院長が担当します。相談した医師と手術する医師が変わりません。',
  },
  {
    title: '精密さを重視',
    body: '目元の薄い組織を丁寧に扱うため、手術用顕微鏡など仕上がりに関わる設備へ投資しています。',
  },
  {
    title: 'ワンプライス制',
    body: '同一施術内で複数ランクを作らず、針糸代・麻酔代・保証などを含めた総額がわかりやすい設計です。',
  },
];

const comparisons = [
  ['比較したい点', '確認ポイント', 'ゆえクリの考え方'],
  ['担当医', '相談した医師が最後まで見るか', '院長が診察から術後フォローまで一貫して担当'],
  ['料金', '表示価格と最終価格に差が出ないか', 'ワンメニュー・ワンプライス制。必要なものを料金に含めて表示'],
  ['専門性', '目元の解剖と眼形成を理解しているか', '美容外科と眼形成の経験をもとに、目元に絞って診療'],
  ['通院性', '術後にすぐ相談しやすい距離か', '鬼越駅徒歩20秒。本八幡、船橋、市川から通院しやすい立地'],
  ['情報量', 'リスク・ダウンタイムまで説明しているか', '各施術ページとFAQで副作用、経過、適応を明記'],
];

const faqs = [
  {
    question: 'ゆえクリニックはどんな人に向いていますか？',
    answer:
      '市川、本八幡、船橋周辺で、目元に絞って相談したい方、院長に最初から最後まで見てほしい方、総額がわかりやすいクリニックを選びたい方に向いています。',
  },
  {
    question: '大手クリニックとの違いは何ですか？',
    answer:
      '幅広い美容施術を大量に扱うのではなく、目元の手術に診療領域を絞っている点、院長が一貫対応する点、同一施術内で高額プランへ分けないワンプライス制である点が主な違いです。',
  },
  {
    question: '安い料金だと品質が心配です。',
    answer:
      '広告費や運営コストを抑えながら、糸・針・顕微鏡など医療品質に関わる部分は重視しています。安さだけを目的にするのではなく、総額のわかりやすさと医療品質の両立を目指しています。',
  },
  {
    question: 'どんな場合は向いていませんか？',
    answer:
      '鼻、輪郭、豊胸など目元以外の大きな美容手術をまとめて相談したい方や、保険診療で眼瞼下垂治療を受けたい方には向いていません。当院は自由診療の目元専門クリニックです。',
  },
];

export default function ReasonsPage() {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
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
        name: 'トップ',
        item: 'https://yueclinic.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'ゆえクリが選ばれる理由',
        item: 'https://yueclinic.com/reasons',
      },
    ],
  };

  return (
    <article className="section fade-in" style={{ maxWidth: '880px', marginTop: '1rem', paddingTop: '1.5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ color: 'var(--color-button)', fontWeight: 600, marginBottom: '0.8rem' }}>
          市川・本八幡・船橋で目元整形を比較している方へ
        </p>
        <h1 className="section__title" style={{ marginBottom: '1.2rem' }}>
          ゆえクリが選ばれる理由
        </h1>
        <p style={{ lineHeight: 1.9, color: '#444', maxWidth: '720px', margin: '0 auto' }}>
          目元の手術は、価格だけでも、知名度だけでも決めにくい領域です。
          yueclinic（ゆえクリニック）は、目元専門・院長一貫対応・精密な手術環境・わかりやすい総額表示を大切にしています。
        </p>
      </header>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-button)', marginBottom: '1.5rem', textAlign: 'center' }}>
          比較するときに見てほしい4つの軸
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {strengths.map((strength) => (
            <div key={strength.title} className="column-card" style={{ cursor: 'default', padding: '1.4rem' }}>
              <h3 style={{ color: 'var(--color-button)', fontSize: '1.1rem', marginBottom: '0.8rem' }}>{strength.title}</h3>
              <p style={{ color: '#444', lineHeight: 1.8, margin: 0 }}>{strength.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-button)', marginBottom: '1.5rem', textAlign: 'center' }}>
          クリニック選びの比較表
        </h2>
        <div style={{ overflowX: 'auto', border: '1px solid var(--color-accent-light)', borderRadius: '8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '720px', background: '#fff' }}>
            <tbody>
              {comparisons.map((row, rowIndex) => (
                <tr key={row[0]} style={{ background: rowIndex === 0 ? 'var(--color-bg)' : '#fff' }}>
                  {row.map((cell) => (
                    <td
                      key={cell}
                      style={{
                        borderBottom: '1px solid var(--color-accent-light)',
                        padding: '1rem',
                        color: rowIndex === 0 ? 'var(--color-button)' : '#444',
                        fontWeight: rowIndex === 0 ? 700 : 400,
                        verticalAlign: 'top',
                        lineHeight: 1.7,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: '4rem', background: '#fdfdf9', border: '1px solid var(--color-accent-light)', borderRadius: '8px', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-button)', marginBottom: '1rem' }}>
          こんな相談が多いです
        </h2>
        <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.9, color: '#444' }}>
          <li>自然な二重にしたいが、埋没法と切開法のどちらが合うかわからない</li>
          <li>以前の埋没法が取れた、または左右差が気になる</li>
          <li>目の下のクマやたるみで疲れて見える</li>
          <li>眉下切開や眼瞼下垂手術を、見た目も含めて相談したい</li>
          <li>大手で高額な見積もりになり、総額が不安になった</li>
        </ul>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-button)', marginBottom: '1.5rem', textAlign: 'center' }}>
          よくある比較質問
        </h2>
        <div className="faq-list" style={{ boxShadow: 'none', border: '1px solid var(--color-accent-light)' }}>
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary className="faq-question">{faq.question}</summary>
              <div className="faq-answer">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>

      <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href={reserveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          LINEで空き状況を確認
        </a>
        <Link href="/prices" className="btn btn--outline">
          メニュー・料金を見る
        </Link>
      </div>
    </article>
  );
}
