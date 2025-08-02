import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const KnowledgeHubPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const filePath =
      currentLanguage.code === 'ar'
        ? '/knowledge-hub/rhizomatic-organization.ar.html'
        : '/knowledge-hub/rhizomatic-organization.html';

    fetch(filePath)
      .then((res) => res.text())
      .then((html) => {
        if (containerRef.current) {
          const scriptRegex = /<script>([\s\S]*?)<\/script>/;
          const match = html.match(scriptRegex);
          const scriptContent = match ? match[1] : '';
          const cleanedHtml = html.replace(scriptRegex, '');
          containerRef.current.innerHTML = cleanedHtml;
          if (scriptContent) {
            const script = document.createElement('script');
            script.textContent = scriptContent;
            containerRef.current.appendChild(script);
          }
        }
      })
      .catch((err) => {
        console.error('Failed to load Knowledge Hub page', err);
      });
  }, [currentLanguage]);

  return <div ref={containerRef} />;
};

export default KnowledgeHubPage;
