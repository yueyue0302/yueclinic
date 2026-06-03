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

type PriceTableRow = {
  id: string;
  name: string;
  parentName?: string;
  description?: string;
  summary: string;
  price: string;
  priceLabel?: string;
  usualPrice?: string;
  href: string;
};

const categories = pricesData.categories as PriceCategory[];
const menuDetails = menuDetailsData as Record<string, MenuDetails>;

const detailedRowsById: Record<string, PriceTableRow[]> = {
  futae_maibotsu: [
    {
      id: 'futae_maibotsu',
      name: '二重埋没法（自然癒着法６往復）',
      parentName: '二重埋没法',
      description: '自然癒着法６点',
      summary: '2点留めや従来の自然癒着法より固定範囲と力の分散を重視。',
      price: '¥68,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥136,000',
      href: '/menus/futae_maibotsu',
    },
    {
      id: 'ganken_masaki_in_futae',
      name: '真崎式 切らない眼瞼下垂',
      parentName: '二重埋没法',
      description: '同時に目の開きを調整したい場合のみ',
      summary: '目つき矯正として、まぶたの裏側から目の開きを調整します。',
      price: '¥100,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥200,000',
      href: '/menus/futae_maibotsu',
    },
    {
      id: 'uwamabuta_dasshi_in_futae',
      name: '上まぶた脂肪とり',
      parentName: '二重埋没法',
      description: '希望があれば埋没法に追加可能',
      summary: '腫れぼったさが強い方に、埋没法と同時に追加できます。',
      price: '¥20,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥40,000',
      href: '/menus/futae_maibotsu',
    },
  ],
  kuma_tori: [
    {
      id: 'ura_dasshi',
      name: '経結膜脱脂',
      parentName: 'クマ取り',
      description: '脂肪取りのみ',
      summary: '目の下のふくらみの原因となる脂肪を、まぶたの裏側から取り除きます。',
      price: '¥80,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥160,000',
      href: '/menus/kuma_tori',
    },
    {
      id: 'ura_hamura',
      name: '裏ハムラ法',
      parentName: 'クマ取り',
      description: 'まぶたの裏から脂肪移動',
      summary: '表側を切開せず、脂肪を凹みに移動してクマを改善します。',
      price: '¥140,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥280,000',
      href: '/menus/kuma_tori',
    },
    {
      id: 'shita_ganken',
      name: '下まぶたたるみ取り',
      parentName: 'クマ取り',
      description: '下眼瞼皮膚除すう術',
      summary: '余った皮膚を切除し、目の下のたるみや小ジワを整えます。',
      price: '¥100,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥200,000',
      href: '/menus/kuma_tori',
    },
    {
      id: 'omote_hamura',
      name: '表ハムラ法',
      parentName: 'クマ取り',
      description: '皮膚切開での脂肪移動＋眼輪筋等処置',
      summary: '皮膚切開で脂肪移動・余剰皮膚・眼輪筋を複合的に整えます。',
      price: '¥180,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥360,000',
      href: '/menus/kuma_tori',
    },
  ],
  mejiri_tareme: [
    {
      id: 'mejiri_sekka',
      name: '目尻切開のみ',
      parentName: 'タレ目形成・目尻切開',
      description: '目の横幅を外側へ広げる手術',
      summary: '目尻を外側へ広げ、切れ長で自然な目元を目指します。',
      price: '¥40,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥80,000',
      href: '/menus/mejiri_tareme',
    },
    {
      id: 'tareme_keisei',
      name: 'タレ目形成（グラマラスライン）のみ',
      parentName: 'タレ目形成・目尻切開',
      description: '下まぶたのラインを下げる手術',
      summary: 'つり目感をやわらげ、優しい印象の目元を目指します。',
      price: '¥80,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥160,000',
      href: '/menus/mejiri_tareme',
    },
    {
      id: 'mejiri_tareme_combo',
      name: '目尻切開 ＋ タレ目形成 複合',
      parentName: 'タレ目形成・目尻切開',
      description: '横幅と下方向の変化を同時に調整',
      summary: '目尻切開とタレ目形成を組み合わせ、外側・下側への変化を狙います。',
      price: '¥120,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥240,000',
      href: '/menus/mejiri_tareme',
    },
    {
      id: 'mejiri_jintai',
      name: '目尻靱帯移動セット（外眼角靱帯骨膜固定）',
      parentName: 'タレ目形成・目尻切開',
      description: '靱帯移動を含む高度なセット',
      summary: '目尻の靱帯を移動させ、後戻りしにくい大きな変化を目指します。',
      price: '¥200,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥400,000',
      href: '/menus/mejiri_tareme',
    },
  ],
  sekkai_ganken: [
    {
      id: 'scarless_futae',
      name: '二重全切開',
      parentName: '二重切開・眼瞼下垂',
      description: '通常切開 / スカーレス切開',
      summary: '埋没法では難しい厚み・たるみを切開で整えます。',
      price: '¥180,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥270,000',
      href: '/menus/sekkai_ganken',
    },
    {
      id: 'scarless_ganken',
      name: '眼瞼下垂',
      parentName: '二重切開・眼瞼下垂',
      description: '通常切開 / スカーレス切開',
      summary: '目の開きに関わる筋肉・腱膜を調整し、眠そうな印象を改善します。',
      price: '¥220,000',
      priceLabel: 'モニター価格',
      usualPrice: '¥330,000',
      href: '/menus/sekkai_ganken',
    },
  ],
  tain_basshi: [
    {
      id: 'tain_basshi_sekkai',
      name: '他院の切開法の抜糸',
      parentName: '他院施術の抜糸',
      description: '目元・前額リフトの抜糸',
      summary: '他院で受けた切開法や前額リフトの糸を、医師が丁寧に抜糸します。',
      price: '',
      usualPrice: '¥20,000',
      href: '/menus/tain_basshi',
    },
    {
      id: 'tain_basshi_maibotsu',
      name: '他院の埋没法の糸の抜糸',
      parentName: '他院施術の抜糸',
      description: '埋没法と同時施術 / 抜糸のみ',
      summary: '埋没法と同時施術は1本¥3,000、抜糸のみは1本¥10,000です。',
      price: '',
      usualPrice: '1本 ¥3,000〜',
      href: '/menus/tain_basshi',
    },
    {
      id: 'tain_basshi_korea',
      name: '韓国美容外科の埋没法（外側に残る糸）の抜糸',
      parentName: '他院施術の抜糸',
      description: '外側に残る糸の抜糸',
      summary: '外側に残る糸が気になる場合の抜糸にも対応します。',
      price: '',
      usualPrice: '¥10,000',
      href: '/menus/tain_basshi',
    },
  ],
};

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

function tableRowsForItem(item: PriceItem): PriceTableRow[] {
  const detailedRows = detailedRowsById[item.id];
  if (detailedRows) return detailedRows;

  const details = menuDetails[item.id] || {};
  return [
    {
      id: item.id,
      name: item.name,
      parentName: item.description || undefined,
      summary: details.catchphrase || item.description || '詳しい適応はカウンセリングで確認します。',
      price: yen(item.price, item.priceSuffix),
      priceLabel: priceLabel(item),
      usualPrice: normalPrice(details),
      href: `/menus/${item.id}`,
    },
  ];
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
  const allRows = categories.flatMap((category) => category.items.flatMap(tableRowsForItem));
  const itemListStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'yueclinic 料金表',
    itemListElement: allRows.map((row, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: row.name,
      url: `https://yueclinic.com${row.href}`,
    })),
  };

  return (
    <article className="section fade-in" style={{ maxWidth: '1080px', marginTop: '1rem', paddingTop: '1.5rem' }}>
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
          切らない眼瞼下垂、上まぶた脂肪とり、裏ハムラ法・表ハムラ法などの細かいメニューも並べています。
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
                  <th>モニター価格</th>
                  <th>通常料金</th>
                  <th>内容</th>
                  <th>詳細</th>
                </tr>
              </thead>
              <tbody>
                {category.items.flatMap(tableRowsForItem).map((row) => (
                    <tr key={row.id}>
                      <td className="prices-table__menu">
                        <Link href={row.href} className="prices-table__menu-link">
                          {row.name}
                        </Link>
                        {row.parentName && (
                          <span className="prices-table__description">{row.parentName}</span>
                        )}
                        {row.description && (
                          <span className="prices-table__subdescription">{row.description}</span>
                        )}
                      </td>
                      <td className="prices-table__price">
                        <span>{row.price || '—'}</span>
                        {row.priceLabel && <small>{row.priceLabel}</small>}
                      </td>
                      <td className="prices-table__usual">
                        {row.usualPrice || '—'}
                      </td>
                      <td className="prices-table__summary">
                        {row.summary}
                      </td>
                      <td className="prices-table__detail">
                        <Link href={row.href} className="prices-table__detail-link">
                          詳細
                        </Link>
                      </td>
                    </tr>
                ))}
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
