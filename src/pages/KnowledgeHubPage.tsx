import React, { useEffect, useRef } from 'react';

const KnowledgeHubPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/knowledge-hub/rhizomatic-organization.html')
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
  }, []);

  return <div ref={containerRef} />;
};

export default KnowledgeHubPage;
