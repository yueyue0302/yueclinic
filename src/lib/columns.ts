import columnsData from '../../data/columns.json';

interface ColumnMeta {
  slug: string;
  title: string;
  date: string;
  category?: string;
}

interface ColumnData extends ColumnMeta {
  contentHtml: string;
}

const allColumns = columnsData as ColumnData[];

export function getSortedColumnsData(): ColumnMeta[] {
  return allColumns.map(({ slug, title, date, category }) => ({
    slug,
    title,
    date,
    category,
  }));
}

export async function getColumnData(slug: string): Promise<ColumnData> {
  const column = allColumns.find(c => c.slug === slug);
  if (!column) {
    throw new Error(`Column not found: ${slug}`);
  }
  return column;
}
