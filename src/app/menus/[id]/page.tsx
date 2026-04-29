import Link from 'next/link';
import Image from 'next/image';
import pricesData from '../../../../data/prices.json';
import menuDetailsData from '../../../../data/menuDetails.json';

interface PriceCategory {
  id: string;
  name: string;
  items: PriceItem[];
}

interface PriceItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

// Define the static paths so Next.js knows what dynamic pages to build
export async function generateStaticParams() {
  const allItems = (pricesData.categories as PriceCategory[]).flatMap(cat => cat.items);
  return allItems.map(item => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const allItems = (pricesData.categories as PriceCategory[]).flatMap(cat => cat.items);
  const itemData = allItems.find(item => item.id === resolvedParams.id);
  
  if (!itemData) return { title: 'メニュー詳細' };
  return {
    title: `${itemData.name}`,
  };
}

export default async function MenuDetail({ params }: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const allItems = (pricesData.categories as PriceCategory[]).flatMap(cat => cat.items);
  const itemData = allItems.find(item => item.id === resolvedParams.id);

  if (!itemData) {
    return (
      <div className="section" style={{ minHeight: '60vh', marginTop: '5rem', textAlign: 'center' }}>
        <h1 className="section__title">施術が見つかりません</h1>
        <Link href="/" className="btn btn--outline">トップページに戻る</Link>
      </div>
    );
  }

  const details = (menuDetailsData as Record<string, any>)[itemData.id] || {
    catchphrase: "経験豊富な専門医が自然な仕上がりと高い安全性を追求します。",
    overview: "当院では、専門の医師が手術用顕微鏡等を活用し緻密で丁寧な施術を行います。",
    targets: ["効果を実感しつつ、費用を抑えたい方", "自然な仕上がりを求める方"],
    imagePath: "/illust_embed.png",
    downtime: "数日から1週間程度の腫れや内出血が生じる場合があります。",
    risks: "腫れ、内出血、左右差、感染等。",
    details: "局所麻酔等を使用し、丁寧に施術を行います。"
  };

  return (
    <article className="section fade-in" style={{ padding: '0 20px', maxWidth: '800px', margin: '2rem auto 5rem' }}>

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '2rem', color: 'var(--color-button)' }}>
          {itemData.name.replace(/（.*）/g, '')}
          {resolvedParams.id === 'futae_maibotsu' && <span style={{fontSize: '1rem', marginLeft: '0.4rem', fontWeight: '500', display: 'inline-block', color: '#555'}}>（切らずに糸で二重を作る方法）</span>}
        </h1>
        <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--color-text)' }}>
          ¥{itemData.price.toLocaleString()}<span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 'normal', marginLeft: '0.4rem' }}>(モニター価格)</span>
        </div>
      </div>

      {/* Hero Illustration */}
      <div style={{ position: 'relative', width: '100%', marginBottom: '3rem', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fbfaf8', border: '1px solid var(--color-accent-light)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <div style={{ display: 'flex', width: '100%', height: '350px', padding: '1rem', gap: '1rem' }}>
          {(details.imagePaths || [details.imagePath || "/menu_double.png"]).map((imgSrc: string, idx: number) => (
             <div key={idx} style={{ position: 'relative', flex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
               {details.imageTitles && details.imageTitles[idx] && (
                 <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-button)' }}>
                   {details.imageTitles[idx]}
                 </div>
               )}
               <div style={{ position: 'relative', flex: 1, width: '100%' }}>
                 <Image 
                   src={imgSrc} 
                   alt={details.imageTitles ? details.imageTitles[idx] : `手術の仕組みと図解 ${idx + 1}`} 
                   fill 
                   style={{ objectFit: 'contain' }} 
                   priority={idx === 0}
                 />
               </div>
             </div>
          ))}
        </div>
      </div>
      
      <div className="column-post__content" style={{ background: '#fff', padding: '0', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-button)', borderLeft: '4px solid var(--color-button)', paddingLeft: '1rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
          {details.catchphrase}
        </h2>


        {details.targets && details.targets.length > 0 && (
          <div style={{ background: '#fdfdf9', borderRadius: '12px', padding: '2rem', marginBottom: '3rem', border: '1px solid var(--color-accent-light)' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-button)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              この施術はこんな方におすすめです
            </h3>
            <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
              {details.targets.map((targetText: string, idx: number) => (
                <li key={idx} style={{ marginBottom: '0.8rem', color: '#444', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-button)', marginTop: '0.2rem' }}>✔︎</span>
                  <span>{targetText}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {details.details && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.3rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.8rem', marginBottom: '1.5rem' }}>ゆえクリのこだわり・特徴</h2>
            <div style={{ lineHeight: '1.8', color: '#333', whiteSpace: 'pre-wrap' }}>
              {details.details}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.3rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.8rem', marginBottom: '1.5rem' }}>症例写真・Instagram</h2>
          <div className="instagram-carousel-wrapper" style={{ margin: '0 -20px' }}>
            <div className="swipe-arrow swipe-arrow--right" style={{ right: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
            <div className="instagram-grid hover-up" style={{ padding: '0 20px', display: 'flex', gap: '1rem', overflowX: 'auto', scrollSnapType: 'x mandatory' }}>
              {(details.instagramUrls || [
                "https://www.instagram.com/p/DOq99U5krkZ/embed",
                "https://www.instagram.com/p/C6vxfq2veIO/embed",
                "https://www.instagram.com/p/DBYsVcMztTE/embed"
              ]).map((url: string, idx: number) => (
                <div key={idx} style={{ flexShrink: 0, width: '320px', scrollSnapAlign: 'start', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                  <iframe src={url} width="100%" height="520" frameBorder="0" scrolling="no"></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>

        {details.priceSimulation && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.3rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.8rem', marginBottom: '1.5rem' }}>料金シミュレーション</h2>
            <div style={{ lineHeight: '1.8', color: '#444', background: '#fcfaf6', border: '1px solid var(--color-accent-light)', padding: '1.5rem', borderRadius: '8px' }} dangerouslySetInnerHTML={{ __html: details.priceSimulation }}>
            </div>
          </div>
        )}


        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.3rem', borderBottom: '1px solid var(--color-accent-light)', paddingBottom: '0.8rem', marginBottom: '1.5rem' }}>ダウンタイム・副作用・リスク</h2>
          <div style={{ background: '#faf9f7', padding: '1.5rem', borderRadius: '8px' }}>
            <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none', color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '1.2rem', paddingBottom: '1.2rem', borderBottom: '1px dotted var(--color-accent-light)' }}>
                <strong style={{ color: 'var(--color-button)', display: 'block', marginBottom: '0.4rem' }}>🕒 ダウンタイム・経過目安</strong>
                {details.downtime}
              </li>
              <li>
                <strong style={{ color: 'var(--color-button)', display: 'block', marginBottom: '0.4rem' }}>⚠️ 主なリスク・副作用</strong>
                {details.risks}
              </li>
            </ul>
          </div>
        </div>
        
        {details.footerNote && (
          <div style={{ fontSize: '0.95rem', color: '#555', marginTop: '3rem', background: '#f5f5f5', padding: '1.5rem', borderRadius: '8px' }}>
            {resolvedParams.id === 'futae_maibotsu' && <div style={{fontWeight:'bold', marginBottom:'0.8rem', color:'var(--color-button)', fontSize:'1.1rem'}}>院長つぶやき</div>}
            <div style={{ lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: resolvedParams.id !== 'futae_maibotsu' ? '※ ' + details.footerNote : details.footerNote }} />
          </div>
        )}
      </div>
      
      <div style={{ marginTop: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <Link href="/#reserve" className="btn btn--primary" style={{ width: '100%', maxWidth: '300px' }}>
          この施術を予約する
        </Link>
        <Link href="/#price" className="btn btn--outline" style={{ width: '100%', maxWidth: '300px' }}>
          料金表へ戻る
        </Link>
      </div>
    </article>
  );
}
