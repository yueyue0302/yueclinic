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
  description: '千葉県市川市・鬼越駅徒歩2分。目元専門の美容外科「yueclinic」公式サイト。二重埋没法¥68,000〜、クマ取り¥80,000〜。眼形成修行医による高品質な目元整形を適正価格で。二重整形・眼瞼下垂・クマ取り・目頭目尻切開・タレ目形成。',
  keywords: ['二重整形', '埋没法', '千葉', '市川', '美容外科', 'クマ取り', '眼瞼下垂', '目頭切開', '目尻切開', 'タレ目形成', 'グラマラスライン', '鬼越', '船橋', '本八幡', 'ゆえクリニック', 'yueclinic'],
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://yueclinic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'yueclinic（ゆえクリニック）| 目元専門の美容外科',
    description: '千葉県市川市・鬼越駅徒歩2分。目元専門の美容外科。二重埋没法¥68,000〜。',
    url: 'https://yueclinic.com',
    siteName: 'yueclinic（ゆえクリニック）',
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable}`}>
      <head>
        {/* Google Analytics - Replace G-8F1MXVK9LN with your actual GA4 ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8F1MXVK9LN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8F1MXVK9LN');
            `,
          }}
        />
      </head>
      <body className={notoSansJP.className}>
        {/* MedicalClinic Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "yueclinic（ユエクリニック）",
              "image": "https://yueclinic.com/clinic_interior.png",
              "@id": "https://yueclinic.com",
              "url": "https://yueclinic.com",
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
              },
              "priceRange": "¥20,000〜"
            })
          }}
        />
        {/* FAQ Structured Data for AIO / Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "二重埋没法の料金はいくらですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "当院の二重埋没法はモニター価格¥68,000（通常¥136,000）です。心臓血管外科でも使われるアスフレックス糸を使用し、1年保証付き。針糸代・麻酔代もすべて含まれたコミコミ価格です。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "クマ取りの料金はいくらですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "経結膜脱脂（脂肪取り）がモニター価格¥80,000。裏ハムラ法¥140,000、表ハムラ法¥180,000など、症状に合わせた複数のプランをご用意しています。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "カウンセリングは無料ですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、初回カウンセリングは無料です。院長が直接お悩みをお伺いし、最適な治療法をご提案いたします。無理な勧誘は一切ございません。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "ゆえクリニックはどこにありますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "千葉県市川市北方1-9-14の2階、京成本線「鬼越駅」から徒歩2分の場所にあります。京成八幡（本八幡）から1駅、京成船橋から3駅です。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "埋没法の痛みはありますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "極細の針による局所麻酔を使用しますので、施術中の痛みはほとんどありません。麻酔の注射時にチクッとした感覚がありますが、痛みに配慮した手技で行っております。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "埋没法のダウンタイムはどのくらいですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "腫れのピークは術後2〜3日で、1週間程度で大部分が落ち着きます。内出血が出た場合は1〜2週間で消失します。翌日から日常生活やメイクが可能です。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "未成年でも施術を受けられますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "高校生以上の方は、保護者の方の同意書があれば施術可能です。カウンセリングには保護者の方もご同席いただくことをお勧めしています。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "他院で埋没法が取れてしまいました。相談できますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、他院での施術後のご相談も承っております。まぶたの状態を正確に診断した上で、再埋没法や切開法など最適なアプローチをご提案いたします。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "眼瞼下垂の手術は保険適用ですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "当院は自由診療（美容外科）です。保険診療には対応しておりませんが、美容的な仕上がりにこだわった精密な手術を適正価格で提供しております。眼瞼下垂手術はモニター価格¥220,000です。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "予約方法を教えてください",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "公式LINEまたは当ホームページからご予約いただけます。当院は完全予約制です。LINEでは空き状況のリアルタイム確認も可能です。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "施術時間はどのくらいですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "埋没法は約20〜30分、切開法は約60〜90分が目安です。カウンセリングを含めた全体の所要時間は、余裕を持って2時間程度とお考えください。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "船橋や本八幡からどのくらいで行けますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "京成船橋駅から京成本線で約8分（3駅）、京成八幡駅（本八幡）から約2分（1駅）です。鬼越駅を降りたら徒歩2分で当院に到着します。"
                  }
                }
              ]
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

