export const metadata = {
  title: '特定商取引法に基づく表記',
};

export default function Legal() {
  return (
    <div className="section fade-in" style={{ marginTop: '2rem', maxWidth: '800px', margin: '5rem auto', lineHeight: '1.8' }}>
      <h1 className="section__title" style={{ fontSize: '1.8rem', marginBottom: '3rem' }}>特定商取引法に基づく表記</h1>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
        <tbody>
          <tr>
            <th style={{ width: '30%', padding: '1rem', border: '1px solid #eee', backgroundColor: '#fdfdf9', textAlign: 'left', fontWeight: 'bold' }}>クリニック名</th>
            <td style={{ padding: '1rem', border: '1px solid #eee' }}>yueclinic（ユエクリニック）</td>
          </tr>
          <tr>
            <th style={{ padding: '1rem', border: '1px solid #eee', backgroundColor: '#fdfdf9', textAlign: 'left', fontWeight: 'bold' }}>所在地</th>
            <td style={{ padding: '1rem', border: '1px solid #eee' }}>〒272-0815 千葉県市川市北方1-9-14-2F</td>
          </tr>
          <tr>
            <th style={{ padding: '1rem', border: '1px solid #eee', backgroundColor: '#fdfdf9', textAlign: 'left', fontWeight: 'bold' }}>診療時間</th>
            <td style={{ padding: '1rem', border: '1px solid #eee' }}>10:00〜21:00（不定休）</td>
          </tr>
          <tr>
            <th style={{ padding: '1rem', border: '1px solid #eee', backgroundColor: '#fdfdf9', textAlign: 'left', fontWeight: 'bold' }}>提供内容</th>
            <td style={{ padding: '1rem', border: '1px solid #eee' }}>美容外科・眼科（まぶた専門）にかかる診療およびそれに付帯するサービス（自由診療）</td>
          </tr>
          <tr>
            <th style={{ padding: '1rem', border: '1px solid #eee', backgroundColor: '#fdfdf9', textAlign: 'left', fontWeight: 'bold' }}>役務の対価</th>
            <td style={{ padding: '1rem', border: '1px solid #eee' }}>当サイトの「料金表」ページ等に表示された価格（消費税込）となります。</td>
          </tr>
          <tr>
            <th style={{ padding: '1rem', border: '1px solid #eee', backgroundColor: '#fdfdf9', textAlign: 'left', fontWeight: 'bold' }}>対価のお支払方法・時期</th>
            <td style={{ padding: '1rem', border: '1px solid #eee' }}>
              クレジットカード・PayPay・現金・Alipay/支付宝
            </td>
          </tr>
          <tr>
            <th style={{ padding: '1rem', border: '1px solid #eee', backgroundColor: '#fdfdf9', textAlign: 'left', fontWeight: 'bold' }}>返品・返金に関する事項</th>
            <td style={{ padding: '1rem', border: '1px solid #eee' }}>
              医療技術というサービスの特性上、原則として施術後の返金、返品には応じられません。<br />
              治療結果には個人差があるため、術前のカウンセリングにて十分にご納得いただいた上でご契約ください。
            </td>
          </tr>
          <tr>
            <th style={{ padding: '1rem', border: '1px solid #eee', backgroundColor: '#fdfdf9', textAlign: 'left', fontWeight: 'bold' }}>クーリング・オフ</th>
            <td style={{ padding: '1rem', border: '1px solid #eee' }}>特定商取引法が規定する指定役務提供契約（一定期間および一定金額を超える契約）に該当する場合は、法定の期間内であればクーリング・オフが適用されます。</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
