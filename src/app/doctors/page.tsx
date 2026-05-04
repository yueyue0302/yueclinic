import Header from '../../components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '医師紹介・ゆえクリの強み',
  description: 'yueclinicの院長紹介と、美容外科×眼形成の専門性など、当クリニックの強みをご紹介いたします。',
};

export default function Doctors() {
  return (
    <div className="section fade-in" style={{ marginTop: '0', paddingTop: '1rem', maxWidth: '800px', margin: '1.5rem auto' }}>
      <section id="strengths" style={{ marginBottom: '4rem' }}>
        <h1 className="section__title">ゆえクリの強み</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Desktop uses standard flex-row, mobile breaks to column */}
          <div className="doctor-strength-layout">
            <div className="doctor-strength-img">
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #eaeaea' }}>
                <img 
                  src="/om6_actual_photo.jpg" 
                  alt="医療クオリティに直結する設備" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
            
            <div style={{ display: 'block', lineHeight: '1.8', color: '#444', fontSize: '1.05rem', textAlign: 'left' }}>
              <p style={{ marginBottom: '1.2rem', lineHeight: '1.8' }}>
                yueclinicは、美容外科および眼形成の分野で修練を積んだ院長による「目元専門」のクリニックです。<br/>
                大手クリニックのような流れ作業ではなく、手術は一日２人までに制限し十分な時間の中で、カウンセリングから施術、抜糸、アフターケアまで、<strong style={{ color: 'var(--color-button)' }}>院長が一貫して担当</strong>いたします。
              </p>
              <p style={{ marginBottom: '1.2rem', lineHeight: '1.8' }}>
                過度な広告費などを抑えたミニマムな経営効率化により、通いやすい「適正価格」を実現しました。その一方で、美しい仕上がりを左右する極細の針・糸や、緻密な手術を可能にする<strong style={{ color: 'var(--color-button)' }}>「手術用顕微鏡」</strong>など、医療クオリティに直結する設備や機材には一切の妥協を許しません。（顕微鏡を導入しているクリニックは少ないです）
              </p>
              <p style={{ lineHeight: '1.8' }}>
                運営の効率化及び患者様利益のため<strong style={{ color: 'var(--color-button)' }}>ワンメニュー：ワンプライス制</strong>（同じ施術内で複数の価格帯やランクを設けるようなことはいたしません）をとっており、アップセールス（予想外に料金が高くなる）の心配がないほか、基本的に必要なものはメニューに含まれており、オプションで値段が釣り上がるようなことはありません。
              </p>
            </div>
          </div>
        </div>
      </section>

      <h1 id="doctors" className="section__title" style={{ scrollMarginTop: '5rem' }}>医師紹介</h1>
      
      <div className="column-card" style={{ marginBottom: '3rem', cursor: 'default' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-button)', marginBottom: '1rem' }}>小林佑紀</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ width: '120px', flexShrink: 0 }}>
              <img src="/doctor_face.png" alt="小林佑紀" style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', objectFit: 'cover', aspectRatio: '3/4' }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ lineHeight: '1.8', margin: 0 }}>
                美容外科院長として多数の症例を経験してまいりました。現在も保険眼形成勤務は継続しつつ、理想の手術・診察環境の構築及び、適正価格で手術を提供するために開業しました。
              </p>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', borderBottom: '1px solid var(--color-accent-light)' }}>経歴</h3>
            <ul style={{ paddingLeft: '0', listStyle: 'none', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ display: 'flex' }}><span style={{ width: '90px', flexShrink: 0, fontWeight: 'bold' }}>2020年</span><span>大阪医科大学卒業</span></li>
              <li style={{ display: 'flex' }}><span style={{ width: '90px', flexShrink: 0, fontWeight: 'bold' }}>2020年</span><span>仁生社 江戸川病院</span></li>
              <li style={{ display: 'flex' }}><span style={{ width: '90px', flexShrink: 0, fontWeight: 'bold' }}>2022年</span><span>大手美容外科 千葉院</span></li>
              <li style={{ display: 'flex' }}><span style={{ width: '90px', flexShrink: 0, fontWeight: 'bold' }}>2023年</span><span>e-clinic 東京</span></li>
              <li style={{ display: 'flex' }}><span style={{ width: '90px', flexShrink: 0, fontWeight: 'bold' }}>2024〜2026</span><span>美容外科 広島院院長</span></li>
              <li style={{ display: 'flex' }}><span style={{ width: '90px', flexShrink: 0, fontWeight: 'bold' }}>2025〜現在</span><span>梶原アイクリニック（保険瞼専門）</span></li>
              <li style={{ display: 'flex' }}><span style={{ width: '90px', flexShrink: 0, fontWeight: 'bold' }}>2025〜現在</span><span>ファミリィアイクリニック 眼瞼部門立ち上げ・手術＋外来 担当（保険）</span></li>
              <li style={{ display: 'flex' }}><span style={{ width: '90px', flexShrink: 0, fontWeight: 'bold' }}>2026年〜</span><span style={{ color: 'var(--color-button)', fontWeight: 'bold' }}>yue clinic開設</span></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
