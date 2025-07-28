import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SyrianCitiesMap from '../components/common/SyrianCitiesMap';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 py-8"
    >
      <div className="flex justify-center mb-10">
        <SyrianCitiesMap />
      </div>
      <div ref={containerRef} />
    </motion.div>
  );
};

export default KnowledgeHubPage;
