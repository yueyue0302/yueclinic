import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '見積書作成',
  robots: {
    index: false,
    follow: false,
  },
};

export default function EstimatePrintLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
