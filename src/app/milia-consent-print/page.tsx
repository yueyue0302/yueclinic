'use client';

import { useRef, useState } from 'react';
import './milia-consent-print.css';

const today = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
};

const formatDate = (value: string) => {
  if (!value) return '';
  const [year, month, day] = value.split('-');
  return `${year}年${Number(month)}月${Number(day)}日`;
};

const sanitizeFileName = (value: string) =>
  value.trim().replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, '_');

const defaultNotes =
  '処置後はこすらず、医師の指示がある場合は軟膏・テープ保護を行ってください。強い痛み、腫れの悪化、膿、発熱などがある場合はクリニックへ連絡してください。';

export default function MiliaConsentPrintPage() {
  const sheetRef = useRef<HTMLElement>(null);
  const [issueDate, setIssueDate] = useState(today);
  const [patientName, setPatientName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [treatmentArea, setTreatmentArea] = useState('');
  const [lesionCount, setLesionCount] = useState('');
  const [anesthesia, setAnesthesia] = useState('必要時、局所麻酔を使用');
  const [fee, setFee] = useState('');
  const [notes, setNotes] = useState(defaultNotes);
  const [isSavingPdf, setIsSavingPdf] = useState(false);

  const clearConsent = () => {
    if (!window.confirm('入力内容をすべて消去しますか？')) return;

    setIssueDate(today());
    setPatientName('');
    setBirthDate('');
    setTreatmentArea('');
    setLesionCount('');
    setAnesthesia('必要時、局所麻酔を使用');
    setFee('');
    setNotes(defaultNotes);
  };

  const savePdf = async () => {
    const sheet = sheetRef.current;
    if (!sheet || isSavingPdf) return;

    setIsSavingPdf(true);
    sheet.classList.add('milia-consent-sheet--saving');

    try {
      await document.fonts.ready;
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);
      const canvas = await html2canvas(sheet, {
        backgroundColor: '#ffffff',
        logging: false,
        scale: 2,
        useCORS: true,
        windowHeight: sheet.scrollHeight,
        windowWidth: sheet.scrollWidth,
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });
      const margin = 10;
      const pageWidth = 210 - margin * 2;
      const pageHeight = 297 - margin * 2;
      const pixelsPerPage = Math.floor((canvas.width * pageHeight) / pageWidth);
      let sourceY = 0;
      let pageIndex = 0;

      while (sourceY < canvas.height) {
        const sliceHeight = Math.min(pixelsPerPage, canvas.height - sourceY);
        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeight;

        const context = pageCanvas.getContext('2d');
        if (!context) throw new Error('PDF画像を生成できませんでした。');

        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        context.drawImage(
          canvas,
          0,
          sourceY,
          canvas.width,
          sliceHeight,
          0,
          0,
          canvas.width,
          sliceHeight,
        );

        if (pageIndex > 0) pdf.addPage();
        const renderedHeight = (sliceHeight * pageWidth) / canvas.width;
        pdf.addImage(
          pageCanvas.toDataURL('image/jpeg', 0.95),
          'JPEG',
          margin,
          margin,
          pageWidth,
          renderedHeight,
          undefined,
          'FAST',
        );

        sourceY += sliceHeight;
        pageIndex += 1;
      }

      const patientPart = sanitizeFileName(patientName) || '患者様';
      const datePart = issueDate || today();
      pdf.save(`稗粒腫除去同意書_${patientPart}_${datePart}.pdf`);
    } catch (error) {
      console.error(error);
      window.alert('PDFの保存に失敗しました。印刷ボタンから「PDFに保存」をお試しください。');
    } finally {
      sheet.classList.remove('milia-consent-sheet--saving');
      setIsSavingPdf(false);
    }
  };

  return (
    <div className="milia-consent-page">
      <div className="milia-consent-toolbar" aria-label="稗粒腫除去同意書操作">
        <div>
          <strong>稗粒腫除去 同意書</strong>
          <span>患者名・部位・個数を入力して、PDF保存または印刷できます。</span>
        </div>
        <div className="milia-consent-toolbar__actions">
          <button type="button" className="milia-consent-button milia-consent-button--subtle" onClick={clearConsent}>
            入力を消去
          </button>
          <button
            type="button"
            className="milia-consent-button milia-consent-button--save"
            onClick={savePdf}
            disabled={isSavingPdf}
          >
            {isSavingPdf ? '保存中...' : 'PDF保存'}
          </button>
          <button type="button" className="milia-consent-button milia-consent-button--primary" onClick={() => window.print()}>
            印刷
          </button>
        </div>
      </div>

      <article ref={sheetRef} className="milia-consent-sheet">
        <header className="milia-consent-header">
          <p className="milia-consent-brand">yueclinic</p>
          <h1>稗粒腫（はいりゅうしゅ・ひりゅうしゅ）除去 同意書</h1>
          <p>
            稗粒腫は、皮膚の浅い部分に角質がたまってできる小さな白色から黄白色の粒状病変です。
            本書は、稗粒腫除去を受ける前に、処置内容・限界・リスクを確認するための同意書です。
          </p>
        </header>

        <section className="milia-consent-fields" aria-label="患者情報">
          <label>
            <span>同意日</span>
            <input
              aria-label="同意日"
              type="date"
              value={issueDate}
              onChange={(event) => setIssueDate(event.target.value)}
            />
            <b>{formatDate(issueDate)}</b>
          </label>
          <label>
            <span>患者氏名</span>
            <input
              aria-label="患者氏名"
              value={patientName}
              onChange={(event) => setPatientName(event.target.value)}
              placeholder="患者様のお名前"
            />
          </label>
          <label>
            <span>生年月日</span>
            <input
              aria-label="生年月日"
              type="date"
              value={birthDate}
              onChange={(event) => setBirthDate(event.target.value)}
            />
            <b>{formatDate(birthDate)}</b>
          </label>
          <label>
            <span>処置部位</span>
            <input
              aria-label="処置部位"
              value={treatmentArea}
              onChange={(event) => setTreatmentArea(event.target.value)}
              placeholder="例：右下まぶた、頬など"
            />
          </label>
          <label>
            <span>予定個数</span>
            <input
              aria-label="予定個数"
              value={lesionCount}
              onChange={(event) => setLesionCount(event.target.value)}
              placeholder="例：3個"
            />
          </label>
          <label>
            <span>麻酔</span>
            <input
              aria-label="麻酔"
              value={anesthesia}
              onChange={(event) => setAnesthesia(event.target.value)}
            />
          </label>
          <label>
            <span>費用</span>
            <input
              aria-label="費用"
              value={fee}
              onChange={(event) => setFee(event.target.value)}
              placeholder="例：税込 〇〇円"
            />
          </label>
        </section>

        <section className="milia-consent-section">
          <h2>処置内容</h2>
          <ol>
            <li>医師が診察し、稗粒腫として処置可能と判断した病変を対象にします。</li>
            <li>消毒後、針または小さな刃で皮膚表面に小さな入口を作り、内容物を圧出または摘出します。</li>
            <li>部位・大きさ・痛みに応じて局所麻酔を使用する場合があります。</li>
            <li>病変が深い、硬い、炎症がある、稗粒腫以外の病変が疑われる場合は、当日処置を行わない、または別の検査・治療を提案することがあります。</li>
          </ol>
        </section>

        <section className="milia-consent-section">
          <h2>主なリスク・限界</h2>
          <ul>
            <li>痛み、出血、赤み、腫れ、内出血、かさぶた、一時的な違和感が出ることがあります。</li>
            <li>感染、治癒遅延、色素沈着、色素脱失、凹み、傷跡、瘢痕が残る可能性があります。</li>
            <li>一度で完全に取れない、同じ部位または近くに再発・新生する、複数回の処置が必要になる場合があります。</li>
            <li>まぶた周囲では皮膚が薄いため、赤み・内出血・腫れが目立つことがあります。</li>
            <li>麻酔薬・消毒薬・軟膏・テープなどでかぶれやアレルギー反応が起こることがあります。</li>
            <li>病理検査は原則として通常の稗粒腫除去では行いません。医師が必要と判断した場合は、検査や他院紹介を提案します。</li>
          </ul>
        </section>

        <section className="milia-consent-section">
          <h2>処置後の注意</h2>
          <textarea
            aria-label="処置後の注意"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={4}
          />
        </section>

        <section className="milia-consent-agreement">
          <p>
            私は、上記の処置内容、期待できる効果、起こりうるリスク、再発や取り残しの可能性、
            代替として経過観察を選べることについて説明を受け、理解しました。
            結果には個人差があり、完全な除去や傷跡が残らないことを保証するものではないことを理解したうえで、
            稗粒腫除去を受けることに同意します。
          </p>
        </section>

        <section className="milia-consent-signatures">
          <div>
            <span>患者署名</span>
            <p />
          </div>
          <div>
            <span>親権者署名（未成年の場合）</span>
            <p />
          </div>
          <div>
            <span>説明医師</span>
            <p>小林 佑紀</p>
          </div>
        </section>

        <footer className="milia-consent-clinic">
          <strong>yueclinic（ゆえクリニック）</strong>
          <span>〒272-0815 千葉県市川市北方1-9-14 2F</span>
          <span>院長 小林佑紀</span>
        </footer>
      </article>
    </div>
  );
}
