import type { Metadata } from 'next';
import PricesTableContent from '../../../prices/PricesTableContent';

export const metadata: Metadata = {
  title: 'Eye Surgery Price List in English | yueclinic',
  description:
    'English price list for double eyelid suture, brow lift, under-eye bag treatment, medial canthoplasty, and ptosis surgery at yueclinic in Ichikawa, Chiba.',
  alternates: {
    canonical: '/international-patients/prices/en',
    languages: {
      ja: '/prices',
      en: '/international-patients/prices/en',
      'zh-CN': '/international-patients/prices/zh',
      'x-default': '/prices',
    },
  },
  openGraph: {
    title: 'Eye Surgery Price List | yueclinic',
    description: 'Treatment fees for international patients seeking eye-area cosmetic surgery at yueclinic.',
    url: 'https://yueclinic.com/international-patients/prices/en',
    type: 'article',
  },
};

export default function EnglishPricesPage() {
  return <PricesTableContent locale="en" />;
}
