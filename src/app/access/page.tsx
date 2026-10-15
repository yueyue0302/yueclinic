import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { clinicGoogleMapsEmbedUrl, clinicGoogleMapsUrl } from '../../lib/clinicMap';

const reserveUrl = 'https://lin.ee/VqhBREq';

export const metadata: Metadata = {
  title: 'アクセス・道案内｜市川市・鬼越駅徒歩20秒の目元専門美容外科',
  description:
    '千葉県市川市の目元専門美容外科、yueclinic（ゆえクリニック）のアクセス案内。京成本線「鬼越駅」徒歩20秒。駅の改札からクリニック入口までの道順を写真と地図でご紹介します。本八幡・船橋・下総中山方面からお越しの方もご確認ください。',
  alternates: {
    canonical: '/access',
  },
  openGraph: {
    title: 'アクセス｜yueclinic（ゆえクリニック）',
    description: '千葉県市川市・京成本線「鬼越駅」徒歩20秒。yueclinic（ゆえクリニック）への道順を、駅の改札から入口までの写真と地図でご案内します。',
    url: 'https://yueclinic.com/access',
    type: 'article',
  },
};

const routePhotos = [
  {
    title: '1. 鬼越駅の改札を出ます',
    body: '改札を出たら右へ進みます。線路の先に、青っぽい小林メディカルビルが見えます。',
    src: '/access-onigoe-station.webp',
    alt: '鬼越駅の改札からyueclinicのビルが見える写真',
    height: '360px',
  },
  {
    title: '2. 小林メディカルビルの前へ',
    body: '線路を渡るとすぐにビル前です。1階に小林医院があり、yueclinicは同じビルの2階です。',
    src: '/access-yueclinic-building.webp',
    alt: 'yueclinicが入る小林メディカルビルの外観',
    height: '520px',
  },
  {
    title: '3. 左側の階段で2階へ',
    body: '入口左側の階段を上がって2階へお越しください。',
    src: '/access-yueclinic-stairs.webp',
    alt: '小林メディカルビル入口と2階へ上がる階段',
    height: '520px',
  },
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
        <h1 className="section__title" style={{ marginBottom: '1.2rem' }}>
          アクセス
        </h1>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.35rem', color: 'var(--color-button)', marginBottom: '1rem', textAlign: 'center' }}>
          鬼越駅からの行き方
        </h2>
        <p style={{ lineHeight: 1.8, color: '#555', maxWidth: '720px', margin: '0 auto 1.5rem', textAlign: 'left' }}>
          改札を出てからビル入口まではすぐです。写真の順に、駅からビル前、階段へお進みください。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          {routePhotos.map((photo) => (
            <article key={photo.src} style={{ border: '1px solid var(--color-accent-light)', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}>
              <div style={{ position: 'relative', width: '100%', height: photo.height, background: '#f6f3ee' }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 860px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div style={{ padding: '1rem 1.2rem' }}>
                <h3 style={{ color: 'var(--color-button)', fontSize: '1.05rem', marginBottom: '0.45rem' }}>
                  {photo.title}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.75, margin: 0 }}>
                  {photo.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.35rem', color: 'var(--color-button)', marginBottom: '1rem', textAlign: 'center' }}>
          地図
        </h2>
        <div className="map-container hover-up">
          <iframe
            src={clinicGoogleMapsEmbedUrl}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="yueclinic（ゆえクリニック）の地図"
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href={clinicGoogleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            Googleマップでyueclinicを開く
          </a>
        </div>
      </section>

      <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={reserveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          LINEで空き状況を確認
        </a>
        <Link href="/reasons" className="btn btn--outline">
          ゆえクリが選ばれる理由
        </Link>
      </div>

      <aside
        aria-label="クリニックのご案内"
        style={{ maxWidth: '720px', margin: '2.5rem auto 0', color: '#666', fontSize: '0.8125rem', fontWeight: 400, lineHeight: 1.9, textAlign: 'left' }}
      >
        <p style={{ marginBottom: '0.5rem' }}>
          市川・本八幡・船橋から通いやすい目元専門美容外科
        </p>
        <p style={{ margin: 0 }}>
          千葉県市川市北方のyueclinic（ゆえクリニック）は、京成本線「鬼越駅」徒歩20秒。
          二重埋没法・眉下切開・眼瞼下垂・クマ取りなど、目元の美容外科診療を行っています。
          診療内容や費用は
          <Link href="/prices" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            メニュー・料金一覧
          </Link>
          をご確認ください。
        </p>
      </aside>
    </article>
  );
}
