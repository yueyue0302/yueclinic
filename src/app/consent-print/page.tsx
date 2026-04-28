'use client';
import { useEffect } from 'react';


export default function ConsentPrint() {
  useEffect(() => {
    // Automatically open print dialog after a slight delay
    setTimeout(() => {
      window.print();
    }, 500);
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 40px', fontFamily: '"Noto Serif JP", "Mincho", serif', color: '#111', lineHeight: '1.6' }}>
      
      <h1 style={{ textAlign: 'center', fontSize: '22px', borderBottom: '2px solid #111', paddingBottom: '8px', marginBottom: '25px' }}>親権者（法定代理人）同意書</h1>

      <p style={{ textAlign: 'right', marginBottom: '20px' }}>
        <strong>yueclinic 小林佑紀</strong>
      </p>

      <p style={{ marginBottom: '20px', fontSize: '15px' }}>
        私（親権者もしくは法定代理人）は、下記の未成年者が貴院においてカウンセリングおよび美容医療の施術を受けること、ならびに施術に伴うリスクや注意事項について事前に十分な説明を受け、これに同意いたします。また、施術後の経過観察や必要な処置についても同意し、異議を申し立てないことを誓約いたします。
      </p>

      <div style={{ textAlign: 'right', marginBottom: '25px' }}>
        <p>【同意日】　20　　年　　月　　日</p>
      </div>

      <h2 style={{ fontSize: '17px', borderLeft: '4px solid #111', paddingLeft: '8px', marginBottom: '15px' }}>【未成年者（患者様ご本人）】</h2>
      <table style={{ width: '100%', marginBottom: '25px', borderCollapse: 'collapse', fontSize: '15px' }}>
        <tbody>
          <tr>
            <td style={{ width: '130px', padding: '6px', verticalAlign: 'top' }}>氏　　名：</td>
            <td style={{ padding: '6px', borderBottom: '1px solid #999' }}></td>
          </tr>
          <tr>
            <td style={{ padding: '6px', verticalAlign: 'top' }}>生年月日：</td>
            <td style={{ padding: '6px', borderBottom: '1px solid #999' }}>西暦　　　　　年　　月　　日 （　　　歳）</td>
          </tr>
          <tr>
            <td style={{ padding: '6px', verticalAlign: 'top' }}>現 住 所：</td>
            <td style={{ padding: '6px', borderBottom: '1px solid #999' }}>〒<br/><br/></td>
          </tr>
          <tr>
            <td style={{ padding: '6px', verticalAlign: 'top' }}>電話番号：</td>
            <td style={{ padding: '6px', borderBottom: '1px solid #999' }}></td>
          </tr>
          <tr>
            <td style={{ padding: '6px', verticalAlign: 'top' }}>希望する施術：<br/><span style={{ fontSize: '10px', color: '#999', fontWeight: 'normal' }}>（複数可）</span></td>
            <td style={{ padding: '6px', borderBottom: '1px solid #999' }}></td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ fontSize: '17px', borderLeft: '4px solid #111', paddingLeft: '8px', marginBottom: '10px' }}>【親権者（法定代理人）様のご記入欄】</h2>
      <p style={{ color: '#d32f2f', fontSize: '12px', marginBottom: '15px', fontWeight: 'bold' }}>
        ※親権者様が直筆でご記入をお願いいたします。
      </p>
      
      <table style={{ width: '100%', marginBottom: '25px', borderCollapse: 'collapse', fontSize: '15px' }}>
        <tbody>
          <tr>
            <td style={{ width: '130px', padding: '6px', verticalAlign: 'top' }}>氏　　名：</td>
            <td style={{ padding: '6px', borderBottom: '1px solid #999' }}></td>
          </tr>
          <tr>
            <td style={{ padding: '6px', verticalAlign: 'top' }}>本人との続柄：</td>
            <td style={{ padding: '6px', borderBottom: '1px solid #999' }}></td>
          </tr>
          <tr>
            <td style={{ padding: '6px', verticalAlign: 'top' }}>現 住 所：</td>
            <td style={{ padding: '6px', borderBottom: '1px solid #999', fontSize: '12px', color: '#666' }}>〒<br/><br/>※ご本人様と同居の場合は「同上」とご記入で構いません。</td>
          </tr>
          <tr>
            <td style={{ padding: '6px', verticalAlign: 'top' }}>日中連絡先：</td>
            <td style={{ padding: '6px', borderBottom: '1px solid #999', fontSize: '12px', color: '#666' }}>※ご来院当日に当院スタッフより同意確認のお電話をさせていただきます。必ず連絡がつくお電話番号をご記入ください。<br/><br/>電話番号：</td>
          </tr>
        </tbody>
      </table>



    </div>
  );
}
