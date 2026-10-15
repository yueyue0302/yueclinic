import type { Metadata } from 'next';
import PricesTableContent from '../PricesTableContent';

export const metadata: Metadata = {
  title: '全メニュー料金表（保存用）｜yueclinic',
  description: 'yueclinicの全メニュー料金表を保存した非公開導線用ページです。',
  robots: {
    index: false,
    follow: false,
  },
};

export default function FullPricesPage() {
  return <PricesTableContent includeArchivedRows />;
}
