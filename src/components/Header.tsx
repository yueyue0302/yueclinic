'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo-wrapper">
          <Link href="/" className="header__logo">
            <span className="logo-main">yueclinic</span>
            <span className="logo-sub">ユエクリニック</span>
          </Link>
          <span className="header__catchphrase">目元専門の美容外科</span>
        </div>
        <button 
          className={`hamburger ${isOpen ? 'is-active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`header__nav ${isOpen ? 'is-open' : ''}`}>
          <Link href="/doctors#doctors" onClick={() => setIsOpen(false)}>医師紹介</Link>
          <Link href="/#price" onClick={() => setIsOpen(false)}>メニュー・料金</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)}>よくある質問</Link>
          <Link href="/columns" onClick={() => setIsOpen(false)}>院長のつぶやき</Link>
          <a href="https://www.instagram.com/dr_kobayashi" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#c13584' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram (症例)
          </a>
          <Link href="/#access" onClick={() => setIsOpen(false)}>アクセス</Link>
          <Link href="/#reserve" className="btn btn--reserve-small" onClick={() => setIsOpen(false)}>予約</Link>
          <Link href="/privacy" className="nav-sublink nav-sublink--privacy" onClick={() => setIsOpen(false)}>プライバシーポリシー</Link>
          <Link href="/cancel" className="nav-sublink nav-sublink--cancel" onClick={() => setIsOpen(false)}>予約キャンセル</Link>
        </nav>
      </div>
    </header>
  );
}
