import Link from 'next/link';

export const metadata = {
  title: 'よくある質問',
};

export default function FAQ() {
  return (
    <div className="section" style={{ minHeight: '60vh', marginTop: '0', paddingTop: '0.5rem', paddingBottom: '2rem' }}>
      <h1 className="section__title" style={{ marginBottom: '0.5rem' }}>よくある質問</h1>
      <div className="faq-list fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <details className="faq-item">
          <summary className="faq-question">予約なしで来院は可能ですか？</summary>
          <div className="faq-answer">
            当院は完全予約制になっております。当日web予約が可能な場合もありますので、web予約にて空き状況をご確認後、ご予約ください。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">予約の仕方がわからない</summary>
          <div className="faq-answer">
            <a href="#reserve" style={{ textDecoration: 'underline', color: 'var(--color-button)', fontWeight: 'bold' }}>こちら</a>からお願いいたします。わからない場合のみ、<a href="https://www.instagram.com/dr_kobayashi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--color-button)', fontWeight: 'bold' }}>instagramダイレクトメッセージ</a>で対応いたしますのでご連絡ください。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">カウンセリング当日に施術は受けられますか？</summary>
          <div className="faq-answer">
            はい、予約状況によりご案内可能です。web予約時にご指定ください。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">モニターは誰でもなれますか？</summary>
          <div className="faq-answer">
            厳しいモニター審査等はありません。ご希望される方は、基本的にどなたでもモニター価格にてご案内が可能となっております。<br />
            約１ヶ月後に一度お写真を撮りにきていただきます<br />
            （切開手術は３ヶ月後など もう一度撮りにきていただきます）
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">未成年でも施術を受けられますか？</summary>
          <div className="faq-answer">
            18歳未満、または高校在学中の方の診察・施術には、必ず親権者様のご同伴が必要です（同意書のみの対応不可）。<br />
            18歳で高校に在籍されていない方は、お一人でお受けいただけます。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">お支払い方法は何がありますか？</summary>
          <div className="faq-answer">
            クレジットカード・PayPay・現金・Alipay/支付宝 がご利用いただけます。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">医療ローンでの支払いは可能ですか？</summary>
          <div className="faq-answer">
            医療ローンのお取り扱いはございません。分割をご希望の場合は、お手持ちのクレジットカードの分割払いをご利用ください。
          </div>
        </details>
      </div>
    </div>
  );
}
