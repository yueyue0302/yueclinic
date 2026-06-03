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

function normalPrice(details?: MenuDetails) {
  const match = details?.priceSimulation?.match(/通常\s*¥[\d,]+/);
  return match ? match[0].replace(/^通常\s*/, '') : '';
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

      <div style={{ maxWidth: '760px', margin: '0 auto 2.4rem', border: '1px solid var(--color-accent-light)', borderRadius: '8px', background: '#fdfdf9', padding: '1rem', textAlign: 'center', color: '#4a433b' }}>
        <div style={{ fontSize: '0.82rem', color: 'var(--color-button)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
          キャンペーン中｜モニター価格でご案内中
        </div>
        <div style={{ fontSize: '1.02rem', fontWeight: 700 }}>
          二重埋没法 ¥68,000 ／ 眉下切開 ¥120,000
        </div>
        <div style={{ fontSize: '0.78rem', color: '#777', marginTop: '0.25rem', lineHeight: 1.6 }}>
          症例写真にご協力いただける方が対象です。適応や条件はカウンセリングで確認します。
        </div>
      </div>

      {categories.map((category) => (
        <section key={category.id} style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.35rem', color: 'var(--color-button)', marginBottom: '1.2rem' }}>
            {category.name}
          </h2>
          <div className="prices-table-wrap">
            <table className="prices-table">
              <thead>
                <tr>
                  <th>施術</th>
                  <th>内容</th>
                  <th>モニター価格</th>
                  <th>通常価格</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item) => {
                  const details = menuDetails[item.id] || {};
                  const usualPrice = normalPrice(details);

                  return (
                    <tr key={item.id}>
                      <td className="prices-table__menu">
                        <Link href={`/menus/${item.id}`} className="prices-table__menu-link">
                          {item.name}
                        </Link>
                        {item.description && (
                          <span className="prices-table__description">{item.description}</span>
                        )}
                      </td>
                      <td className="prices-table__summary">
                        {details.catchphrase || item.description || '詳しい適応はカウンセリングで確認します。'}
                      </td>
                      <td className="prices-table__price">
                        <span>{yen(item.price, item.priceSuffix)}</span>
                        <small>{priceLabel(item)}</small>
                      </td>
                      <td className="prices-table__usual">
                        {usualPrice || '—'}
                      </td>
                      <td className="prices-table__detail">
                        <Link href={`/menus/${item.id}`} className="prices-table__detail-link">
                          詳細
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
