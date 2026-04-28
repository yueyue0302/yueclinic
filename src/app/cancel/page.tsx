export const metadata = {
  title: 'キャンセルポリシー',
};

export default function CancelPolicy() {
  return (
    <div className="section fade-in" style={{ marginTop: '2rem', maxWidth: '800px', margin: '5rem auto', lineHeight: '1.8' }}>
      <h1 className="section__title" style={{ fontSize: '1.8rem', marginBottom: '3rem' }}>キャンセルポリシー</h1>
      
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ marginBottom: '1rem' }}>
          完全予約制にてスムーズなご案内と質の高い診療を提供するため、yueclinicでは以下の通りキャンセルポリシーを設けております。ご予約の変更やキャンセルは、他のお待ちいただいている患者様のためにも、お早めにご連絡をお願いいたします。
        </p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>変更・キャンセルの期限について</h2>
        <p>
          ご予約の変更およびキャンセルは、**ご予約日の3日前まで**に、<a href="#reserve" style={{ textDecoration: 'underline', color: 'var(--color-button)', fontWeight: 'bold' }}>web</a>よりお願いいたします。
        </p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>無断キャンセルおよび遅刻について</h2>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>無断キャンセル：</strong><br/>事前のご連絡なく無断でキャンセルされた場合、次回以降のご予約をお断りさせていただく場合がございます。</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>遅刻：</strong><br/>ご予約のお時間に遅刻される場合や、到着が遅れる可能性がある場合は、必ず当院までご連絡をお願いいたします。</li>
        </ul>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>来院時間について（お願い）</h2>
        <p style={{ marginBottom: '1rem' }}>
          当院は少人数での運営を行っており、また患者様同士がお顔を合わせることがないよう個別のプライバシーを重視したスケジュール管理をしております。そのため、待合室での鉢合わせを防ぐ目的から、<strong>ご予約時間の10分以上前のご来院はお控えいただきますよう</strong>ご協力をお願いいたします。
        </p>
        <p>
          受付ですぐ案内がない場合は入口右手の緑のソファでお待ちください。
        </p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>免責事項</h2>
        <p>
          悪天候や交通機関の遅延・運休、ご自身の体調不良など、やむを得ない事情による変更・キャンセルの場合は、必ずお電話または公式LINEにてご相談ください。状況により柔軟に対応させていただきます。
        </p>
      </div>

    </div>
  );
}
