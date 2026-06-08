'use client';

import { useMemo, useRef, useState } from 'react';
import './receipt-print.css';

type ReceiptItem = {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
};

const createItem = (id: number): ReceiptItem => ({
  id,
  name: '',
  quantity: 1,
  unitPrice: 0,
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

const defaultRemarks = '上記金額を正に領収いたしました。';

export default function ReceiptPrintPage() {
  const sheetRef = useRef<HTMLElement>(null);
  const [receiptNumber, setReceiptNumber] = useState('');
  const [issueDate, setIssueDate] = useState(today);
  const [recipientName, setRecipientName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('現金');
  const [purpose, setPurpose] = useState('美容医療施術代');
  const [items, setItems] = useState<ReceiptItem[]>([
    createItem(1),
    createItem(2),
    createItem(3),
  ]);
  const [remarks, setRemarks] = useState(defaultRemarks);
  const [nextId, setNextId] = useState(4);
  const [isSavingPdf, setIsSavingPdf] = useState(false);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0),
    [items],
  );
  const taxIncluded = Math.max(0, total - Math.round(total / 1.1));

  const updateItem = <K extends keyof ReceiptItem>(
    id: number,
    key: K,
    value: ReceiptItem[K],
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

  const clearReceipt = () => {
    if (!window.confirm('入力内容をすべて消去しますか？')) return;

    setReceiptNumber('');
    setIssueDate(today());
    setRecipientName('');
    setPaymentMethod('現金');
    setPurpose('美容医療施術代');
    setItems([createItem(1), createItem(2), createItem(3)]);
    setRemarks(defaultRemarks);
    setNextId(4);
  };

  const savePdf = async () => {
    const sheet = sheetRef.current;
    if (!sheet || isSavingPdf) return;

    setIsSavingPdf(true);
    sheet.classList.add('receipt-sheet--saving');

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

      const recipientPart = sanitizeFileName(recipientName) || '宛名';
      const datePart = issueDate || today();
      pdf.save(`領収書_${recipientPart}_${datePart}.pdf`);
    } catch (error) {
      console.error(error);
      window.alert('PDFの保存に失敗しました。印刷ボタンから「PDFに保存」をお試しください。');
    } finally {
      sheet.classList.remove('receipt-sheet--saving');
      setIsSavingPdf(false);
    }
  };

  return (
    <div className="receipt-page">
      <div className="receipt-toolbar" aria-label="領収書操作">
        <div>
          <strong>領収書作成</strong>
          <span>入力内容は送信されません。PDF保存後、LINEに添付して送れます。</span>
        </div>
        <div className="receipt-toolbar__actions">
          <button type="button" className="receipt-button receipt-button--subtle" onClick={clearReceipt}>
            入力を消去
          </button>
          <button
            type="button"
            className="receipt-button receipt-button--save"
            onClick={savePdf}
            disabled={isSavingPdf}
          >
            {isSavingPdf ? '保存中...' : 'PDF保存'}
          </button>
          <button type="button" className="receipt-button receipt-button--primary" onClick={() => window.print()}>
            印刷
          </button>
        </div>
      </div>

      <article ref={sheetRef} className="receipt-sheet">
        <header className="receipt-header">
          <div>
            <p className="receipt-brand">yueclinic</p>
            <h1>領収書</h1>
          </div>
          <dl className="receipt-meta">
            <div>
              <dt>領収番号</dt>
              <dd>
                <input
                  aria-label="領収番号"
                  value={receiptNumber}
                  onChange={(event) => setReceiptNumber(event.target.value)}
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
                <span className="receipt-print-value">{formatDate(issueDate)}</span>
              </dd>
            </div>
            <div>
              <dt>支払方法</dt>
              <dd>
                <input
                  aria-label="支払方法"
                  value={paymentMethod}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                  placeholder="現金"
                />
              </dd>
            </div>
          </dl>
        </header>

        <section className="receipt-recipient">
          <label>
            <input
              aria-label="宛名"
              value={recipientName}
              onChange={(event) => setRecipientName(event.target.value)}
              placeholder="患者様のお名前"
            />
            <span>様</span>
          </label>
        </section>

        <section className="receipt-total">
          <span>領収金額（税込）</span>
          <strong>{formatYen(total)}</strong>
        </section>

        <section className="receipt-purpose">
          <span>但し</span>
          <input
            aria-label="但し書き"
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
            placeholder="美容医療施術代"
          />
          <span>として</span>
        </section>

        <div className="receipt-table-wrap">
          <table className="receipt-table">
            <thead>
              <tr>
                <th className="receipt-table__name">内容</th>
                <th>数量</th>
                <th>単価（税込）</th>
                <th>金額</th>
                <th className="receipt-table__remove" aria-label="削除" />
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const amount = Math.max(0, item.quantity * item.unitPrice);
                return (
                  <tr key={item.id}>
                    <td>
                      <input
                        aria-label="内容"
                        value={item.name}
                        onChange={(event) => updateItem(item.id, 'name', event.target.value)}
                        placeholder="施術名・処方代など"
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
                    <td className="receipt-table__amount">{formatYen(amount)}</td>
                    <td className="receipt-table__remove">
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

        <button type="button" className="receipt-add-row" onClick={addItem}>
          ＋ 行を追加
        </button>

        <section className="receipt-summary">
          <dl>
            <div>
              <dt>10%対象（税込）</dt>
              <dd>{formatYen(total)}</dd>
            </div>
            <div>
              <dt>内 消費税</dt>
              <dd>{formatYen(taxIncluded)}</dd>
            </div>
            <div className="receipt-summary__total">
              <dt>合計</dt>
              <dd>{formatYen(total)}</dd>
            </div>
          </dl>
        </section>

        <section className="receipt-notes">
          <h2>備考</h2>
          <textarea
            aria-label="備考"
            value={remarks}
            onChange={(event) => setRemarks(event.target.value)}
            rows={4}
          />
        </section>

        <footer className="receipt-clinic">
          <strong>yueclinic（ゆえクリニック）</strong>
          <span>〒272-0815 千葉県市川市北方1-9-14 2F</span>
          <span>院長 小林佑紀</span>
        </footer>
      </article>
    </div>
  );
}
