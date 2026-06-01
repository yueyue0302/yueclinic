import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'よくある質問',
  description: 'ゆえクリニックの予約、当日施術、モニター、支払い、未成年の施術、他院修正、料金、通院エリアに関するよくある質問です。',
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQ() {
  return (
    <div className="section" style={{ minHeight: '60vh', marginTop: '0', paddingTop: '0.5rem', paddingBottom: '2rem' }}>
      <h1 className="section__title" style={{ marginBottom: '0.5rem' }}>よくある質問</h1>
      <div className="faq-list fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <details className="faq-item">
          <summary className="faq-question">予約なしで来院は可能ですか？</summary>
          <div className="faq-answer">
            当院は完全予約制になっております。当日予約が可能な場合もありますので、<a href="https://lin.ee/VqhBREq" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--color-button)', fontWeight: 'bold' }}>LINE予約</a>にて空き状況をご確認後、ご予約ください。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">予約の仕方がわからない</summary>
          <div className="faq-answer">
            <a href="https://lin.ee/VqhBREq" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--color-button)', fontWeight: 'bold' }}>公式LINE</a>からお願いいたします。LINEにて空き状況の確認やご予約が可能です。<br />やり方がわからない場合のみ、<a href="https://www.instagram.com/dr_kobayashi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--color-button)', fontWeight: 'bold' }}>Instagramダイレクトメッセージ</a>からも可能です。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">カウンセリング当日に施術は受けられますか？</summary>
          <div className="faq-answer">
            はい、予約状況によりご案内可能です。<a href="https://lin.ee/VqhBREq" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--color-button)', fontWeight: 'bold' }}>LINE予約</a>時にご指定ください。
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
        <details className="faq-item">
          <summary className="faq-question">ゆえクリニックはどんな人に向いていますか？</summary>
          <div className="faq-answer">
            市川・本八幡・船橋エリアで、目元の手術を院長に直接相談したい方に向いています。二重埋没法、クマ取り、眉下切開、眼瞼下垂など、目元に絞って診察・施術を行っています。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">大手クリニックとの違いは何ですか？</summary>
          <div className="faq-answer">
            幅広い美容施術を多数扱うのではなく、目元の美容外科・眼形成に診療領域を絞っている点です。カウンセリングから施術、抜糸、アフターケアまで院長が一貫して担当し、同一施術内で複数ランクを作らないワンプライス制を大切にしています。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">表示料金以外に追加費用はありますか？</summary>
          <div className="faq-answer">
            基本的に針糸代・麻酔代・保証など、施術に必要なものはメニュー料金に含めています。診察で別の施術が適していると判断した場合は、理由と総額を事前に説明します。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">他院で受けた二重埋没法やクマ取りの相談もできますか？</summary>
          <div className="faq-answer">
            はい、可能です。まぶたや目の下の状態を診察したうえで、抜糸、再埋没、切開、経過観察など、必要な選択肢を説明します。無理に当日施術をすすめることはありません。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">市川・本八幡・船橋から通いやすいですか？</summary>
          <div className="faq-answer">
            当院は京成本線「鬼越駅」から徒歩20秒です。京成八幡（本八幡）から1駅、京成船橋から3駅で、術後の経過観察にも通いやすい立地です。
          </div>
        </details>
        <details className="faq-item">
          <summary className="faq-question">どんな場合は他院や保険診療を検討した方がよいですか？</summary>
          <div className="faq-answer">
            急にまぶたが下がった、ものが二重に見える、強い頭痛を伴うなど、神経や全身疾患が疑われる場合は、先に眼科・脳神経内科などでの精査をおすすめします。また、保険適用での眼瞼下垂治療をご希望の場合、当院は自由診療のため保険診療には対応していません。
          </div>
        </details>
      </div>
    </div>
  );
}
