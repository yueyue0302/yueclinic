import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(params);
  return {
    title: `症例 No.${resolvedParams.id} | yueclinic`,
  };
}

export default async function CaseDetail({ params }: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams.id;
  
  // Decide mock image based on ID
  let imgSrc = "/clinic_interior.png";
  let title = "二重埋没法（2点留め）";
  let desc = "直後から腫れを抑えた自然な仕上がりです。";
  
  if (id === '2') {
    imgSrc = "/clinic_director.png";
    title = "二重切開法";
    desc = "しっかりとしたラインを作りたい方におすすめの施術です。";
  } else if (id === '3') {
    title = "目頭切開";
    desc = "1ヶ月経過。傷跡もほとんど目立たず、華やかな印象へ。";
  }

  return (
    <article className="section fade-in" style={{ marginTop: '2rem', maxWidth: '800px', margin: '5rem auto' }}>
      <h1 className="section__title">{title}の症例</h1>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {id === '3' ? (
           <div style={{ background: '#f5f5f5', width: '100%', height: 'auto', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
              <p style={{ color: '#aaa', margin: '0 2rem', textAlign: 'center' }}>[症例の拡大モックアップ画像]</p>
           </div>
        ) : (
          <Image 
            src={imgSrc} 
            alt="症例拡大画像" 
            width={800} 
            height={600} 
            className="rounded-img responsive-img"
            style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain', backgroundColor: '#f9f9f9' }}
          />
        )}
      </div>
      <div className="column-post__content" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid var(--color-accent-light)' }}>
        <h2 style={{ marginTop: 0 }}>施術詳細</h2>
        <ul>
          <li><strong>施術内容:</strong> {title}</li>
          <li><strong>経過:</strong> {desc}</li>
        </ul>
        <h2 style={{ marginTop: '2rem' }}>リスク・副作用</h2>
        <p>腫れ、内出血、左右差、感染などが生じるリスクがあります（個人差があります）。</p>
      </div>
      
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link href="/cases" className="btn btn--outline" style={{ marginRight: '1rem' }}>
          症例一覧へ戻る
        </Link>
        <Link href="/#reserve" className="btn btn--primary">
          この施術を予約する
        </Link>
      </div>
    </article>
  );
}
