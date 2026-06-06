'use client';

import { useMemo, useRef, useState } from 'react';
import './estimate-print.css';

type EstimateItem = {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  discount: number;
};

const createItem = (id: number): EstimateItem => ({
  id,
  name: '',
  quantity: 1,
  unitPrice: 0,
  discount: 0,
});

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

const formatYen = (value: number) => `¥${Math.max(0, value).toLocaleString('ja-JP')}`;

const sanitizeFileName = (value: string) =>
  value.trim().replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, '_');

export default function EstimatePrintPage() {
  const sheetRef = useRef<HTMLElement>(null);
  const [estimateNumber, setEstimateNumber] = useState('');
  const [issueDate, setIssueDate] = useState(today);
  const [validUntil, setValidUntil] = useState('');
  const [patientName, setPatientName] = useState('');
  const [items, setItems] = useState<EstimateItem[]>([
    createItem(1),
    createItem(2),
    createItem(3),
  ]);
  const [notes, setNotes] = useState(
    '上記金額には消費税が含まれています。\n施術内容は診察結果により変更となる場合があります。',
  );
  const [nextId, setNextId] = useState(4);
  const [isSavingPdf, setIsSavingPdf] = useState(false);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0),
    [items],
  );
  const totalDiscount = useMemo(
    () => items.reduce((sum, item) => sum + item.discount, 0),
    [items],
  );
  const total = Math.max(0, subtotal - totalDiscount);

  const updateItem = <K extends keyof EstimateItem>(
    id: number,
    key: K,
    value: EstimateItem[K],
  ) => {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, [key]: value } : item)),
    );
  };

  const addItem = () => {
    setItems((current) => [...current, createItem(nextId)]);
    setNextId((current) => current + 1);
  };

  const removeItem = (id: number) => {
    setItems((current) =>
      current.length > 1 ? current.filter((item) => item.id !== id) : current,
    );
  };

  const clearEstimate = () => {
    if (!window.confirm('入力内容をすべて消去しますか？')) return;

    setEstimateNumber('');
    setIssueDate(today());
    setValidUntil('');
    setPatientName('');
    setItems([createItem(1), createItem(2), createItem(3)]);
    setNotes(
      '上記金額には消費税が含まれています。\n施術内容は診察結果により変更となる場合があります。',
    );
    setNextId(4);
  };

  const savePdf = async () => {
    const sheet = sheetRef.current;
    if (!sheet || isSavingPdf) return;

    setIsSavingPdf(true);
    sheet.classList.add('estimate-sheet--saving');

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
      pdf.save(`見積書_${patientPart}_${datePart}.pdf`);
    } catch (error) {
      console.error(error);
      window.alert('PDFの保存に失敗しました。印刷ボタンから「PDFに保存」をお試しください。');
    } finally {
      sheet.classList.remove('estimate-sheet--saving');
      setIsSavingPdf(false);
    }
  };

  return (
    <div className="estimate-page">
      <div className="estimate-toolbar" aria-label="見積書操作">
        <div>
          <strong>見積書作成</strong>
          <span>入力内容は送信されません。完成後はPDF保存または印刷できます。</span>
        </div>
        <div className="estimate-toolbar__actions">
          <button type="button" className="estimate-button estimate-button--subtle" onClick={clearEstimate}>
            入力を消去
          </button>
          <button
            type="button"
            className="estimate-button estimate-button--save"
            onClick={savePdf}
            disabled={isSavingPdf}
          >
            {isSavingPdf ? '保存中…' : 'PDF保存'}
          </button>
          <button type="button" className="estimate-button estimate-button--primary" onClick={() => window.print()}>
            印刷
          </button>
        </div>
      </div>

      <article ref={sheetRef} className="estimate-sheet">
        <header className="estimate-header">
          <div>
            <p className="estimate-brand">yueclinic</p>
            <h1>御 見 積 書</h1>
          </div>
          <dl className="estimate-meta">
            <div>
              <dt>見積番号</dt>
              <dd>
                <input
                  aria-label="見積番号"
                  value={estimateNumber}
                  onChange={(event) => setEstimateNumber(event.target.value)}
                  placeholder="任意"
                />
              </dd>
            </div>
            <div>
              <dt>発行日</dt>
              <dd>
                <input
                  aria-label="発行日"
                  type="date"
                  value={issueDate}
                  onChange={(event) => setIssueDate(event.target.value)}
                />
                <span className="estimate-print-value">{formatDate(issueDate)}</span>
              </dd>
            </div>
            <div>
              <dt>有効期限</dt>
              <dd>
                <input
                  aria-label="有効期限"
                  type="date"
                  value={validUntil}
                  onChange={(event) => setValidUntil(event.target.value)}
                />
                <span className="estimate-print-value">{formatDate(validUntil)}</span>
              </dd>
            </div>
          </dl>
        </header>

        <section className="estimate-recipient">
          <label>
            <input
              aria-label="患者様氏名"
              value={patientName}
              onChange={(event) => setPatientName(event.target.value)}
              placeholder="患者様のお名前"
            />
            <span>様</span>
          </label>
          <p>下記の通り御見積申し上げます。</p>
        </section>

        <section className="estimate-total">
          <span>御見積金額（税込）</span>
          <strong>{formatYen(total)}</strong>
        </section>

        <div className="estimate-table-wrap">
          <table className="estimate-table">
            <thead>
              <tr>
                <th className="estimate-table__name">施術・内容</th>
                <th>数量</th>
                <th>単価（税込）</th>
                <th>割引</th>
                <th>金額</th>
                <th className="estimate-table__remove" aria-label="削除" />
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const amount = Math.max(0, item.quantity * item.unitPrice - item.discount);
                return (
                  <tr key={item.id}>
                    <td>
                      <input
                        aria-label="施術・内容"
                        value={item.name}
                        onChange={(event) => updateItem(item.id, 'name', event.target.value)}
                        placeholder="施術名・麻酔代など"
                      />
                    </td>
                    <td>
                      <input
                        aria-label="数量"
                        type="number"
                        min="0"
                        step="1"
                        value={item.quantity}
                        onChange={(event) =>
                          updateItem(item.id, 'quantity', Math.max(0, Number(event.target.value)))
                        }
                      />
                    </td>
                    <td>
                      <input
                        aria-label="単価"
                        type="number"
                        min="0"
                        step="1000"
                        value={item.unitPrice || ''}
                        onChange={(event) =>
                          updateItem(item.id, 'unitPrice', Math.max(0, Number(event.target.value)))
                        }
                        placeholder="0"
                      />
                    </td>
                    <td>
                      <input
                        aria-label="割引"
                        type="number"
                        min="0"
                        step="1000"
                        value={item.discount || ''}
                        onChange={(event) =>
                          updateItem(item.id, 'discount', Math.max(0, Number(event.target.value)))
                        }
                        placeholder="0"
                      />
                    </td>
                    <td className="estimate-table__amount">{formatYen(amount)}</td>
                    <td className="estimate-table__remove">
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`${item.name || '行'}を削除`}
                        title="行を削除"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <button type="button" className="estimate-add-row" onClick={addItem}>
          ＋ 行を追加
        </button>

        <section className="estimate-summary">
          <dl>
            <div>
              <dt>小計</dt>
              <dd>{formatYen(subtotal)}</dd>
            </div>
            <div>
              <dt>割引合計</dt>
              <dd>− {formatYen(totalDiscount)}</dd>
            </div>
            <div className="estimate-summary__total">
              <dt>合計（税込）</dt>
              <dd>{formatYen(total)}</dd>
            </div>
          </dl>
        </section>

        <section className="estimate-notes">
          <h2>備考</h2>
          <textarea
            aria-label="備考"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={4}
          />
        </section>

        <footer className="estimate-clinic">
          <strong>yueclinic（ゆえクリニック）</strong>
          <span>〒272-0815 千葉県市川市北方1-9-14 2F</span>
          <span>院長 小林佑紀</span>
        </footer>
      </article>
    </div>
  );
}
