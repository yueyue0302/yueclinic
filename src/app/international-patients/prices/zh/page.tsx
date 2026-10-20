import type { Metadata } from 'next';
import PricesTableContent from '../../../prices/PricesTableContent';

export const metadata: Metadata = {
  title: '眼部整形价格表（中文）| yueclinic',
  description:
    'yueclinic中文价格表。可查看双眼皮埋线、眉下切口提眉术、眼袋及黑眼圈手术、开内眼角和上睑下垂手术的费用。诊所位于千叶县市川市。',
  alternates: {
    canonical: '/international-patients/prices/zh',
    languages: {
      ja: '/prices',
      en: '/international-patients/prices/en',
      'zh-CN': '/international-patients/prices/zh',
      'x-default': '/prices',
    },
  },
  openGraph: {
    title: '眼部整形价格表（中文）| yueclinic',
    description: '面向海外患者的yueclinic眼部美容外科手术价格表。',
    url: 'https://yueclinic.com/international-patients/prices/zh',
    type: 'article',
  },
};

export default function ChinesePricesPage() {
  return <PricesTableContent locale="zh" />;
}
