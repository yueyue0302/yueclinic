import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '領収書作成',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReceiptPrintLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
