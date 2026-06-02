'use client';

/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from 'react';

type FeedbackClientProps = {
  googleReviewUrl: string;
  lineUrl: string;
};

const labels: Record<number, string> = {
  1: 'とても不安',
  2: '少し不安',
  3: '普通',
  4: '満足',
  5: 'とても満足',
};

export default function FeedbackClient({ googleReviewUrl, lineUrl }: FeedbackClientProps) {
  const [rating, setRating] = useState<number | null>(null);
  const qrUrl = useMemo(
    () => `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=16&data=${encodeURIComponent(googleReviewUrl)}`,
    [googleReviewUrl],
  );
  const hasConcern = rating !== null && rating <= 4;

  return (
    <article className="section fade-in" style={{ maxWidth: '760px', marginTop: '1rem', paddingTop: '1.5rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ color: 'var(--color-button)', fontWeight: 600, marginBottom: '0.8rem' }}>
          yueclinic
        </p>
        <h1 className="section__title" style={{ marginBottom: '1.2rem' }}>
          ご来院ありがとうございました
        </h1>
        <p style={{ lineHeight: 1.9, color: '#444', maxWidth: '620px', margin: '0 auto' }}>
          今後の診療改善のため、率直なご感想をお聞かせください。
          個人情報や詳しい治療内容は書かなくて大丈夫です。
        </p>
      </header>

      <section style={{ background: '#fdfdf9', border: '1px solid var(--color-accent-light)', borderRadius: '8px', padding: '1.4rem', marginBottom: '1.4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.15rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
          本日のご来院はいかがでしたか？
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.35rem', marginBottom: '0.9rem' }}>
          {[1, 2, 3, 4, 5].map((score) => (
            <button
              key={score}
              type="button"
              aria-label={`${score}点: ${labels[score]}`}
              onClick={() => setRating(score)}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                border: rating !== null && score <= rating ? '1px solid var(--color-button)' : '1px solid var(--color-accent-light)',
                background: rating !== null && score <= rating ? '#fff8e8' : '#fff',
                color: rating !== null && score <= rating ? 'var(--color-button)' : '#c9c1b4',
                fontSize: '1.8rem',
                lineHeight: 1,
                cursor: 'pointer',
              }}
            >
              ★
            </button>
          ))}
        </div>
        <div style={{ minHeight: '1.6rem', color: 'var(--color-button)', fontWeight: 700 }}>
          {rating ? `${rating}点：${labels[rating]}` : '星をタップしてください'}
        </div>
      </section>

      {rating && (
        <section style={{ background: '#fff', border: '1px solid var(--color-accent-light)', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
          {hasConcern ? (
            <div style={{ marginBottom: '1.3rem', background: '#fdfdf9', borderRadius: '8px', padding: '1rem' }}>
              <h2 style={{ fontSize: '1.15rem', color: 'var(--color-button)', marginBottom: '0.7rem' }}>
                ご不安な点があれば、まずLINEでご相談ください
              </h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
                術後経過や診療内容で気になることがあれば、公開の口コミを書く前でも後でも、公式LINEからご連絡ください。
                院長が内容を確認します。
              </p>
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ padding: '0.85rem 1.6rem' }}>
                LINEで相談する
              </a>
            </div>
          ) : (
            <div style={{ marginBottom: '1.3rem' }}>
              <h2 style={{ fontSize: '1.15rem', color: 'var(--color-button)', marginBottom: '0.7rem' }}>
                温かい評価をありがとうございます
              </h2>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                Googleでも率直なご感想をいただけますと、今後の診療の励みになります。
              </p>
            </div>
          )}

          <div style={{ borderTop: '1px solid var(--color-accent-light)', paddingTop: '1.3rem' }}>
            <h2 style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '0.8rem' }}>
              Googleマップで口コミを書く
            </h2>
            <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              星の数に関係なく、率直なご意見を歓迎しています。QRを読み取るとGoogleマップのyueclinicページが開きます。
            </p>
            <div style={{ display: 'inline-block', padding: '0.8rem', border: '1px solid var(--color-accent-light)', borderRadius: '8px', background: '#fff', marginBottom: '1rem' }}>
              <img src={qrUrl} alt="Googleマップのyueclinicページを開くQRコード" width="220" height="220" style={{ display: 'block', width: '220px', height: '220px' }} />
            </div>
            <div>
              <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ padding: '0.8rem 1.6rem' }}>
                Googleマップを開く
              </a>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
