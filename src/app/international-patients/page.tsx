import type { Metadata } from 'next';
import Link from 'next/link';

const lineUrl = 'https://lin.ee/VqhBREq';

const faqs = [
  {
    question: 'Can I contact yueclinic in English or Chinese?',
    answer:
      'Yes. Short inquiries in English or Chinese are welcome through the official LINE. For medical safety, important explanations, consent, and final treatment decisions are confirmed during the in-person consultation.',
  },
  {
    question: 'Do I need to speak Japanese?',
    answer:
      'If Japanese is difficult, please use a translation app or come with someone who can interpret. If the medical explanation cannot be understood safely, same-day surgery may not be possible.',
  },
  {
    question: 'Can international patients have surgery on the same day?',
    answer:
      'Same-day surgery may be possible depending on appointment availability, examination findings, health history, medication, and whether the consent process can be completed safely.',
  },
];

const procedures = [
  ['Double eyelid suture', '二重埋没法', '自然な二重ライン、取れにくさ、総額のわかりやすさを重視します。'],
  ['Brow lift / eyebrow incision', '眉下切開', 'まぶたのかぶさりを軽くし、元の二重ラインを大きく変えにくい手術です。'],
  ['Under-eye bag treatment', 'クマ取り', '目の下のふくらみ、たるみ、影の原因を診察して術式を検討します。'],
  ['Ptosis / eyelid opening', '眼瞼下垂', '目の開き、眠そうな印象、左右差を診察します。'],
];

export const metadata: Metadata = {
  title: 'For International Patients｜English・Chinese inquiries welcome',
  description:
    'yueclinic welcomes international patients seeking eye-area cosmetic surgery in Ichikawa, Chiba, near Tokyo. English and Chinese inquiries are welcome via LINE. Double eyelid surgery, brow lift, under-eye treatment, and ptosis consultation.',
  alternates: {
    canonical: '/international-patients',
  },
  openGraph: {
    title: 'For International Patients｜yueclinic',
    description:
      'English and Chinese-speaking patients are welcome to contact yueclinic via LINE for eye-area cosmetic surgery consultation near Tokyo and Chiba.',
    url: 'https://yueclinic.com/international-patients',
  },
};

export default function InternationalPatientsPage() {
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
        name: 'For International Patients',
        item: 'https://yueclinic.com/international-patients',
      },
    ],
  };

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
          English / 中文 inquiries welcome
        </p>
        <h1 className="section__title" style={{ marginBottom: '1rem', fontSize: '1.6rem', letterSpacing: 0, lineHeight: 1.35, overflowWrap: 'anywhere' }}>
          <span style={{ display: 'block' }}>For International</span>
          <span style={{ display: 'block' }}>Patients</span>
          <span style={{ display: 'block', fontSize: '1.1rem', marginTop: '0.35rem' }}>
            外国籍・英語圏・中国語圏の患者様へ
          </span>
        </h1>

        <p style={{ maxWidth: '740px', margin: '0 auto 2rem', color: '#555', lineHeight: 1.9, textAlign: 'left' }}>
          yueclinic welcomes international patients who are looking for eye-area cosmetic surgery near Tokyo, Chiba,
          Ichikawa, Motoyawata, Funabashi, and Onigoe. We focus on eyelid and under-eye procedures, with clear pricing
          and consultation by the same doctor who performs the surgery.
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
          <h2 style={{ color: 'var(--color-button)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
            Language support policy
          </h2>
          <p style={{ color: '#555', lineHeight: 1.85 }}>
            English and Chinese messages are welcome via the official LINE. We may use translation tools when needed.
            Because cosmetic surgery requires accurate medical explanation and consent, important details are confirmed
            in person. If Japanese is difficult, please bring an interpreter or someone who can help you understand the
            explanation.
          </p>
          <p style={{ color: '#555', lineHeight: 1.85, marginTop: '0.8rem' }}>
            英語・中国語での短い事前相談も可能です。医療説明と同意確認は安全のため重要ですので、日本語が不安な方は翻訳アプリや通訳できる方の同伴をおすすめします。
          </p>
          <p style={{ color: '#555', lineHeight: 1.85, marginTop: '0.8rem' }}>
            欢迎通过官方 LINE 发送英文或中文咨询。由于美容外科手术需要充分理解医疗说明和同意事项，如果您不太会日语，建议使用翻译软件或与可协助翻译的人一同来院。
          </p>
        </section>

        <section style={{ marginBottom: '2.3rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-button)' }}>
            Procedures we focus on
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.85rem',
            }}
          >
            {procedures.map(([english, japanese, description]) => (
              <article key={english} className="column-card" style={{ cursor: 'default', padding: '1.2rem' }}>
                <h3 style={{ color: 'var(--color-button)', fontSize: '1.05rem', marginBottom: '0.3rem' }}>{english}</h3>
                <p style={{ fontWeight: 700, color: '#3e3832', marginBottom: '0.45rem' }}>{japanese}</p>
                <p style={{ color: '#666', lineHeight: 1.75, fontSize: '0.92rem' }}>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '2.3rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-button)' }}>
            How to book
          </h2>
          <div style={{ display: 'grid', gap: '0.85rem' }}>
            {[
              ['1. Contact us via LINE', 'Send your name, preferred procedure, preferred date, language, and whether you want same-day surgery.'],
              ['2. Consultation and examination', 'The doctor checks your eyelids or under-eye area, explains suitability, downtime, risks, and total cost.'],
              ['3. Consent and surgery', 'Surgery is performed only after the treatment plan and consent are understood. Same-day surgery depends on medical and schedule conditions.'],
              ['4. Aftercare', 'You can contact us after surgery if you are worried about swelling, bruising, asymmetry, or recovery.'],
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

        <section
          style={{
            background: '#fff',
            border: '1px solid var(--color-accent-light)',
            borderRadius: '8px',
            padding: '1.2rem',
            marginBottom: '2.3rem',
          }}
        >
          <h2 style={{ color: 'var(--color-button)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
            Location
          </h2>
          <p style={{ color: '#555', lineHeight: 1.85 }}>
            yueclinic is located in Ichikawa, Chiba, close to Tokyo. The clinic is about 20 seconds on foot from
            Onigoe Station on the Keisei Line. It is accessible from Motoyawata, Funabashi, Ichikawa, and central Tokyo.
          </p>
          <p style={{ color: '#555', lineHeight: 1.85, marginTop: '0.8rem' }}>
            地址：千葉県市川市北方1-9-14 2F。京成本線「鬼越駅」步行约20秒。
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-button)' }}>
            FAQ
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

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Contact via LINE
          </a>
          <Link href="/prices" className="btn btn--outline">
            Price list
          </Link>
          <Link href="/access" className="btn btn--outline">
            Access
          </Link>
        </div>
      </main>
    </>
  );
}
