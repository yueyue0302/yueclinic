import Link from 'next/link';
import type { Metadata } from 'next';
import pricesData from '../../../data/prices.json';
import menuDetailsData from '../../../data/menuDetails.json';

type PriceItem = {
  id: string;
  name: string;
  price: number;
  priceSuffix?: string;
  description?: string;
};

type PriceCategory = {
  id: string;
  name: string;
  items: PriceItem[];
};

type MenuDetails = {
  catchphrase?: string;
  priceSimulation?: string;
};

const categories = pricesData.categories as PriceCategory[];
const menuDetails = menuDetailsData as Record<string, MenuDetails>;

function yen(price: number, suffix = '') {
  return `¥${price.toLocaleString('ja-JP')}${suffix}`;
}

function priceLabel(item: PriceItem) {
  return item.id === 'tain_basshi' ? '定価' : 'モニター価格';
}

export const metadata: Metadata = {
  title: '料金表｜二重埋没法・クマ取り・眉下切開・目元整形',
  description:
    'yueclinic（ゆえクリニック）の料金表。二重埋没法、クマ取り、眉下切開、眼瞼下垂、目頭切開、目尻切開、他院施術の抜糸まで、各施術ページへリンクして確認できます。',
  alternates: {
    canonical: '/prices',
  },
  openGraph: {
    title: '料金表｜yueclinic',
    description:
      '二重埋没法、クマ取り、眉下切開、眼瞼下垂など、目元手術の料金を一覧で確認できます。',
    url: 'https://yueclinic.com/prices',
    type: 'article',
  },
};

export default function PricesPage() {
  const allItems = categories.flatMap((category) => category.items);
  const itemListStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'yueclinic 料金表',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `https://yueclinic.com/menus/${item.id}`,
    })),
  };

  return (
    <article className="section fade-in" style={{ maxWidth: '960px', marginTop: '1rem', paddingTop: '1.5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListStructuredData) }}
      />

      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p style={{ color: 'var(--color-button)', fontWeight: 600, marginBottom: '0.8rem' }}>
          目元専門 yueclinic
        </p>
        <h1 className="section__title" style={{ marginBottom: '1.2rem' }}>
          メニュー・料金表
        </h1>
        <p style={{ lineHeight: 1.9, color: '#444', maxWidth: '720px', margin: '0 auto' }}>
          二重埋没法、クマ取り、眉下切開、眼瞼下垂などの料金を一覧で確認できます。
          各施術名を押すと、詳しい適応・ダウンタイム・リスクのページへ移動します。
        </p>
      </header>

      {categories.map((category) => (
        <section key={category.id} style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.35rem', color: 'var(--color-button)', marginBottom: '1.2rem' }}>
            {category.name}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {category.items.map((item) => {
              const details = menuDetails[item.id] || {};

              return (
                <section
                  key={item.id}
                  className="column-card"
                  style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <Link href={`/menus/${item.id}`} style={{ display: 'block' }}>
                    <h3 style={{ color: 'var(--color-button)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>
                      {item.name}
                    </h3>
                    {item.description && (
                      <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>{item.description}</p>
                    )}
                  </Link>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-text)' }}>
                      {yen(item.price, item.priceSuffix)}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#888' }}>{priceLabel(item)}</span>
                  </div>

                  {details.catchphrase && (
                    <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                      {details.catchphrase}
                    </p>
                  )}

                  {details.priceSimulation && (
                    <div
                      style={{
                        lineHeight: 1.75,
                        color: '#444',
                        background: '#fcfaf6',
                        border: '1px solid var(--color-accent-light)',
                        padding: '1rem',
                        borderRadius: '8px',
                        fontSize: '0.92rem',
                      }}
                      dangerouslySetInnerHTML={{ __html: details.priceSimulation }}
                    />
                  )}

                  <Link href={`/menus/${item.id}`} className="btn btn--outline" style={{ width: '100%', marginTop: 'auto' }}>
                    この施術を詳しく見る
                  </Link>
                </section>
              );
            })}
          </div>
        </section>
      ))}

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="https://lin.ee/VqhBREq" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          LINEで相談・予約する
        </a>
      </div>
    </article>
  );
}
