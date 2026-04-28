import Link from 'next/link';

export const metadata = {
  title: '症例写真',
};

export default function Cases() {
  return (
    <div className="section" style={{ minHeight: '60vh', marginTop: '5rem' }}>
      <h1 className="section__title">症例写真</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
        目元の施術を中心とした、当院の症例写真をご紹介します。
      </p>
      
      <div className="instagram-grid fade-in">
        {/* Mock Case 1 */}
        <div className="instagram-mock">
          <div className="instagram-mock__img">
            <div style={{ background: '#f5f5f5', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '250px' }}>
               <p style={{ color: '#aaa', margin: '0 2rem', textAlign: 'center' }}>[二重埋没法のBefore/After画像]</p>
            </div>
          </div>
          <div className="instagram-mock__caption">
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-button)' }}>二重埋没法（2点留め）</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>施術価格: 29,800円<br/>リスク・副作用: 腫れ・内出血・左右差など（数日〜1週間程度）</p>
          </div>
        </div>

        {/* Mock Case 2 */}
        <div className="instagram-mock">
          <div className="instagram-mock__img">
            <div style={{ background: '#f5f5f5', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '250px' }}>
               <p style={{ color: '#aaa', margin: '0 2rem', textAlign: 'center' }}>[目頭切開のBefore/After画像]</p>
            </div>
          </div>
          <div className="instagram-mock__caption">
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-button)' }}>目頭切開</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>施術価格: 98,000円<br/>リスク・副作用: 腫れ・赤み・傷跡・左右差など（1〜2週間程度）</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link href="/" className="btn btn--outline">
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
