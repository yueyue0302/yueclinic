import Image from 'next/image';
import pricesData from '../../data/prices.json';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '目元専門の美容外科・眼形成',
  description: 'yueclinic（ゆえクリニック）のトップページ。二重整形から高度な切開手術まで幅広く対応します。',
};

export default function Home() {
  return (
    <div>
      {/* Features Section */}
      <section className="section fade-in" style={{ marginTop: '1rem', maxWidth: '800px', margin: '1rem auto 0', padding: '0 20px' }}>
        <h2 className="section__title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>ゆえクリの強み</h2>
        
        <div style={{ marginBottom: '1rem', lineHeight: '1.8', color: '#444', fontSize: '1.05rem', textAlign: 'left' }}>
          <div>
            <Link href="/doctors#strengths" style={{ display: 'block', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid #eaeaea', textDecoration: 'none', position: 'relative' }} className="hover-up">
              <div style={{ width: '100%', paddingBottom: '20%', position: 'relative', minHeight: '130px' }}>
                <Image 
                  src="/warm_clinic_banner.png" 
                  alt="ゆえクリの強み" 
                  fill
                  style={{ objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '1rem' }}>
                  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <h3 style={{ margin: 0, color: '#3e3832', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                      目元専門・院長が一貫して対応
                    </h3>
                    <h3 style={{ margin: 0, color: '#3e3832', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                      顕微鏡下による精密手術
                    </h3>
                    <h3 style={{ margin: 0, color: '#3e3832', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
                      ワンメニュー：ワンプライス
                    </h3>
                  </div>
                  <div style={{ position: 'absolute', right: '1.2rem', color: 'var(--color-button)', width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="section bg-light" style={{ paddingTop: '0.4rem', paddingBottom: '2.5rem' }}>
        <h2 className="section__title" style={{ marginBottom: '1rem' }}>メニュー・料金</h2>
        <div className="price-list fade-in">
          {pricesData.categories.map((category) => (
            <div key={category.id} className="price-category">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '0.8rem', rowGap: '0.4rem' }}>
                {category.items.map((item, idx) => (
                  <Link href={`/menus/${item.id}`} key={item.id} className="price-item" style={{ 
                    padding: '0.8rem 0', 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    display: 'flex', 
                    alignItems: 'center', 
                    borderBottom: '1px dotted var(--color-accent-light)',
                    gridColumn: (item as any).fullWidth ? '1 / -1' : 'auto'
                  }}>
                    <div className="price-item__info" style={{ flex: 1, marginRight: '0.5rem' }}>
                      <div className="price-item__name" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>{item.name}</div>
                      {item.description && <div className="price-item__desc" style={{ fontSize: '0.7rem', marginTop: '0.2rem', color: '#666' }}>{item.description}</div>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                      <div className="price-item__price" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                        ¥{item.price.toLocaleString()}{/* @ts-ignore */}{(item as any).priceSuffix || ''}
                      </div>
                      <div style={{ 
                        marginLeft: '0.4rem',
                        color: 'var(--color-button)',
                        display: 'flex',
                        alignItems: 'center',
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '-1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ color: '#888', fontSize: '0.75rem' }}>＊保証・針糸代・麻酔代含む</span>
          <span style={{ color: '#888', fontSize: '0.75rem' }}>＊上記はモニター価格</span>
          <span style={{ color: '#888', fontSize: '0.75rem' }}>＊片目は30％off</span>
        </div>
      </section>


      {/* Access Section */}
      <section id="access" className="section bg-light" style={{ paddingBottom: '4rem', paddingTop: '1.25rem' }}>
        <h2 className="section__title" style={{ marginBottom: '1.5rem' }}>アクセス</h2>
        <div className="access-info fade-in" style={{ marginBottom: '1rem' }}>
          <p>
            京成線「鬼越駅」から20秒<br/>
            <span style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.3rem', display: 'inline-block' }}>少しローカル駅ですが、駅まで来たらすぐそこなので意外と近いです</span>
          </p>
        </div>
        <div className="map-container hover-up">
          <iframe
            src="https://maps.google.co.jp/maps?q=yue+clinic%E3%80%90%E3%83%A6%E3%82%A8%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF%E3%80%91&z=17&output=embed"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-button)', lineHeight: '1.6', textAlign: 'center' }} className="fade-in">
          改札出て右、線路を渡り、薬局の左の青っぽいビルです。<br/>
          階段より２階へお越しください。<br/>
          <span style={{ fontSize: '0.8rem', color: '#888', display: 'inline-block', marginTop: '0.5rem' }}>
            ※当院は京成線「鬼越駅」からスグ！本八幡（京成八幡駅）の隣駅であり、市川や船橋、下総中山等にお住いの方もご来院いただきやすい立地です。質の高い自然な二重埋没法や眉下切開など目元手術を適正価格（安い設定）でご提供しております。
          </span>
        </div>
      </section>


      <footer className="footer">
        <div className="footer__inner">
          <h2 className="footer__logo">yueclinic</h2>
          <p className="footer__address" style={{ lineHeight: '2', marginBottom: '1.5rem' }}>
            〒272-0815 千葉県市川市北方1-9-14-2F
          </p>            
          <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: '0.8rem', lineHeight: '1.6' }}>
            ※サイト・SNS上のテキスト・イラスト・画像の無断複写・転載等を固く禁じます。<br/>
            <span style={{ fontSize: '0.75rem', color: '#aaa' }}>悪質な権利侵害や業務妨害行為（誹謗中傷等を含む）に対しては、発信者情報開示請求等の法的措置を厳正に講じます。</span>
          </div>
          <p className="footer__copyright">&copy; {new Date().getFullYear()} yueclinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
