export const metadata = {
  title: 'プライバシーポリシー',
};

export default function PrivacyPolicy() {
  return (
    <div className="section fade-in" style={{ marginTop: '2rem', maxWidth: '800px', margin: '5rem auto', lineHeight: '1.8' }}>
      <h1 className="section__title" style={{ fontSize: '1.8rem', marginBottom: '3rem' }}>プライバシーポリシー（個人情報保護方針）</h1>
      
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ marginBottom: '1rem' }}>
          yueclinic（以下、「当院」といいます。）は、お客様の個人情報の取扱いについて、以下の通りプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
        </p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>1. 個人情報の収集・利用目的</h2>
        <p>当院が個人情報を収集・利用する目的は、以下のとおりです。</p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>ご予約の確認、カウンセリングおよび施術に関するご連絡のため</li>
          <li>患者様に適した医療サービス、アフターケアを提供するため</li>
          <li>お問い合わせに対する回答のため</li>
          <li>当院のサービス向上、アンケート調査、キャンペーン等のご案内のため</li>
        </ul>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>2. 個人情報の第三者提供</h2>
        <p>
          当院は、次に掲げる場合を除いて、あらかじめ患者様の同意を得ることなく、第三者に個人情報を提供することはありません。
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>法令に基づく場合</li>
          <li>人の生命、身体または財産の保護のために必要であって、本人の同意を得ることが困難である場合</li>
        </ul>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>3. 症例写真（モニター）の取扱い</h2>
        <p>
          モニター契約等により撮影した写真や動画等は、患者様の同意を得た範囲内（WEBサイト、SNS、学会発表等）でのみ使用し、個人が特定されるような情報（氏名等）は一切公開いたしません。
        </p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>4. 変更・お問い合わせ</h2>
        <p>
          本ポリシーの内容は、法令改正等により事前の通知なく変更されることがあります。本ポリシーに関するお問い合わせは、当院の公式LINEまたはお問い合わせ窓口までお願いいたします。
        </p>
      </div>

    </div>
  );
}
