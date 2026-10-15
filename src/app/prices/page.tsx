import type { Metadata } from 'next';
import PricesTableContent from './PricesTableContent';

export const metadata: Metadata = {
  title: '料金表｜二重埋没法・クマ取り・眉下切開・目元整形',
  description:
    'yueclinic（ゆえクリニック）の料金表。二重埋没法、クマ取り、眉下切開、眼瞼下垂、目頭切開など、各施術ページへリンクして確認できます。',
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
  return <PricesTableContent />;
}
