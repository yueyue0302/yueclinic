'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      params?: Record<string, string | number | boolean | undefined>,
    ) => void;
  }
}

const eventNameForLink = (url: URL, currentPath: string) => {
  const host = url.hostname.replace(/^www\./, '');

  if (host === 'lin.ee') {
    return 'line_reservation_click';
  }

  if (host === 'instagram.com') {
    return 'instagram_click';
  }

  if (host === 'maps.app.goo.gl') {
    return 'google_review_click';
  }

  if (host === 'google.com' && url.pathname.startsWith('/maps')) {
    return 'google_maps_click';
  }

  if (url.origin === window.location.origin && url.pathname.startsWith('/menus/')) {
    return currentPath === '/prices' ? 'price_detail_click' : 'menu_detail_click';
  }

  if (url.origin === window.location.origin && url.pathname === '/prices') {
    return 'price_page_click';
  }

  return null;
};

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest('a[href]');
      if (!(link instanceof HTMLAnchorElement)) return;

      const url = new URL(link.href, window.location.href);
      const currentPath = window.location.pathname;
      const eventName = eventNameForLink(url, currentPath);
      if (!eventName || !window.gtag) return;

      window.gtag('event', eventName, {
        link_url: url.href,
        link_text: link.textContent?.replace(/\s+/g, ' ').trim().slice(0, 80),
        page_path: currentPath,
        target_path: url.origin === window.location.origin ? url.pathname : undefined,
        menu_id: url.pathname.startsWith('/menus/') ? url.pathname.replace('/menus/', '') : undefined,
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
