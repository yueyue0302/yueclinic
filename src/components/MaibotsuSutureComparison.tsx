import type { ReactNode } from 'react';

type DiagramFrameProps = {
  titleId: string;
  descriptionId: string;
  children: ReactNode;
};

function DiagramFrame({ titleId, descriptionId, children }: DiagramFrameProps) {
  return (
    <svg
      className="suture-pattern__svg"
      viewBox="0 0 320 230"
      role="img"
      aria-labelledby={`${titleId} ${descriptionId}`}
    >
      <title id={titleId}>埋没法の通糸ライン模式図</title>
      <desc id={descriptionId}>皮膚側と結膜側の間を糸が通る経路を単純化して示しています。</desc>
      <rect x="28" y="42" width="274" height="146" rx="14" className="suture-pattern__tissue" />
      <path d="M42 70 C104 60 216 60 288 70" className="suture-pattern__layer-line" />
      <path d="M42 164 C108 174 218 174 288 164" className="suture-pattern__layer-line" />
      <text x="42" y="32" className="suture-pattern__layer-label">皮膚側</text>
      <text x="42" y="211" className="suture-pattern__layer-label">結膜側</text>
      {children}
    </svg>
  );
}

export default function MaibotsuSutureComparison() {
  const yuePoints = [58, 99, 140, 181, 222, 263];

  return (
    <section className="suture-comparison" aria-labelledby="suture-comparison-title">
      <div className="suture-comparison__heading">
        <p className="suture-comparison__eyebrow">通糸ラインの比較</p>
        <h2 id="suture-comparison-title">一般的な2点留めとの違い</h2>
        <p>
          同じ埋没法でも、糸で囲む範囲や横方向への連続性は異なります。下図は通糸経路を比較するための展開模式図です。
        </p>
      </div>

      <div className="suture-comparison__grid">
        <figure className="suture-pattern">
          <DiagramFrame titleId="triangle-title" descriptionId="triangle-description">
            <path d="M88 67 L160 169 L232 67 Z" className="suture-pattern__thread" />
            <circle cx="88" cy="67" r="6" className="suture-pattern__point" />
            <circle cx="232" cy="67" r="6" className="suture-pattern__point" />
            <circle cx="160" cy="169" r="6" className="suture-pattern__point" />
          </DiagramFrame>
          <figcaption>
            <strong>2点留め・トライアングル</strong>
            <span>皮膚側の2点と結膜側の1点を、三角形に結ぶ考え方。</span>
          </figcaption>
        </figure>

        <figure className="suture-pattern">
          <DiagramFrame titleId="square-title" descriptionId="square-description">
            <path d="M82 67 L82 169 L238 169 L238 67 Z" className="suture-pattern__thread" />
            <circle cx="82" cy="67" r="6" className="suture-pattern__point" />
            <circle cx="238" cy="67" r="6" className="suture-pattern__point" />
            <circle cx="82" cy="169" r="6" className="suture-pattern__point" />
            <circle cx="238" cy="169" r="6" className="suture-pattern__point" />
          </DiagramFrame>
          <figcaption>
            <strong>2点留め・スクエア</strong>
            <span>皮膚側と結膜側を横にも通し、四角形として囲む考え方。</span>
          </figcaption>
        </figure>

        <figure className="suture-pattern suture-pattern--yue">
          <div className="suture-pattern__badge">ゆえクリ</div>
          <DiagramFrame titleId="yue-title" descriptionId="yue-description">
            <path
              d="M58 67 L58 169 L99 67 L99 169 L140 67 L140 169 L181 67 L181 169 L222 67 L222 169 L263 67 L263 169"
              className="suture-pattern__thread"
            />
            <path d="M58 169 L263 169" className="suture-pattern__conjunctiva-thread" />
            {yuePoints.map((x) => (
              <g key={x}>
                <circle cx={x} cy="67" r="5" className="suture-pattern__point" />
                <circle cx={x} cy="169" r="5" className="suture-pattern__conjunctiva-point" />
              </g>
            ))}
          </DiagramFrame>
          <figcaption>
            <strong>自然癒着法6往復＋結膜側横通し</strong>
            <span>6か所を往復し、さらに裏側（結膜側）を横方向につなぐ設計。</span>
          </figcaption>
        </figure>
      </div>

      <div className="suture-comparison__legend" aria-label="図の凡例">
        <span><i className="suture-comparison__key suture-comparison__key--main" />主な通糸ライン</span>
        <span><i className="suture-comparison__key suture-comparison__key--conjunctiva" />結膜側の横通し</span>
      </div>

      <p className="suture-comparison__summary">
        ゆえクリでは、固定する範囲を広く取り、力が一部に集中しにくいことを重視しています。
        通糸位置や深さは、まぶたの厚み・希望する二重ラインに合わせて調整します。
      </p>
      <p className="suture-comparison__note">
        ※比較のために組織の層や糸の立体的な走行を単純化した模式図です。実際の術式は診察時の状態により調整します。
      </p>
    </section>
  );
}
