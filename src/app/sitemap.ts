import type { MetadataRoute } from 'next';
import columnsData from '../../data/columns.json';
import pricesData from '../../data/prices.json';

const BASE_URL = 'https://yueclinic.com';
const UPDATED_AT = new Date('2026-06-01');

type Column = {
  slug: string;
  date?: string;
};

type PriceItem = {
  id: string;
};

type PriceCategory = {
  items: PriceItem[];
};

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/`, lastModified: UPDATED_AT, changeFrequency: 'weekly', priority: 1 },
  { url: `${BASE_URL}/reasons`, lastModified: UPDATED_AT, changeFrequency: 'monthly', priority: 0.95 },
  { url: `${BASE_URL}/prices`, lastModified: UPDATED_AT, changeFrequency: 'monthly', priority: 0.95 },
  { url: `${BASE_URL}/access`, lastModified: UPDATED_AT, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/doctors`, lastModified: UPDATED_AT, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/faq`, lastModified: UPDATED_AT, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/flow`, lastModified: UPDATED_AT, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE_URL}/international-patients`, lastModified: UPDATED_AT, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/kajihara-eye-clinic`, lastModified: UPDATED_AT, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/columns`, lastModified: UPDATED_AT, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/llms.txt`, lastModified: UPDATED_AT, changeFrequency: 'weekly', priority: 0.6 },
  { url: `${BASE_URL}/cases`, lastModified: UPDATED_AT, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/surgery-day-notes`, lastModified: UPDATED_AT, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/cancel`, lastModified: UPDATED_AT, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/legal`, lastModified: UPDATED_AT, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/privacy`, lastModified: UPDATED_AT, changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const menuRoutes = (pricesData.categories as PriceCategory[])
    .flatMap((category) => category.items)
    .map((item) => ({
      url: `${BASE_URL}/menus/${item.id}`,
      lastModified: UPDATED_AT,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }));

  const columnRoutes = (columnsData as Column[]).map((column) => ({
    url: `${BASE_URL}/columns/${column.slug}`,
    lastModified: column.date ? new Date(column.date) : UPDATED_AT,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...menuRoutes, ...columnRoutes];
}
