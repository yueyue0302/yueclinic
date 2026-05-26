import { redirect } from 'next/navigation';

export const dynamic = 'force-static';

export async function generateMetadata() {
  return {
    title: '症例写真・経過 | yueclinic',
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: '/cases',
    },
  };
}

export default function CaseDetail() {
  redirect('/cases');
}
