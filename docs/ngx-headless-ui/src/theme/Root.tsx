import React, { useEffect } from 'react';
import OriginalRoot from '@theme-original/Root';

export default function Root({ children }) {
  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      html.classList.toggle('dark', isDark);
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Initial sync
    html.classList.toggle('dark', html.getAttribute('data-theme') === 'dark');

    return () => observer.disconnect();
  }, []);

  return <OriginalRoot>{children}</OriginalRoot>;
}
// This file is a custom Docusaurus theme component that synchronizes the
// `dark` class on the `<html>` element with the `data-theme` attribute.