import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | yueclinic（ゆえクリニック）',
    default: 'yueclinic（ゆえクリニック）| 鬼越駅前の目元専門美容外科・眼形成',
  },
  description: '目元専門の美容外科「yueclinic」の公式ホームページです。二重整形から高度な眼瞼下垂治療、逆さまつげ（睫毛内反）まで、院長一貫体制による高品質な美容医療を提供します。',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable}`}>
      <body className={notoSansJP.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "yueclinic（ユエクリニック）",
              "image": "https://yueclinic.local/clinic_interior.png",
              "@id": "https://yueclinic.local",
              "url": "https://yueclinic.local",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "北方1-9-14-2F",
                "addressLocality": "市川市",
                "addressRegion": "千葉県",
                "postalCode": "272-0815",
                "addressCountry": "JP"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "21:00"
              },
              "medicalSpecialty": [
                "PlasticSurgery",
                "Dermatology"
              ],
              "employee": {
                "@type": "Physician",
                "name": "小林佑紀"
              }
            })
          }}
        />
        <Header />
        <main>{children}</main>
        
        {/* Floating Reservation */}
        <div className="floating-reserve">
          <a href="#reserve" className="btn btn--primary" style={{ boxShadow: '0 10px 30px rgba(168, 148, 117, 0.5)' }}>LINEで空き状況を確認</a>
        </div>

      </body>
    </html>
  );
}
