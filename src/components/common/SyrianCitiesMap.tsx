import React, { useEffect, useRef } from 'react';
import { syrianCities } from '../../data/syrian_cities';

const SyrianCitiesMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;
    const L = (window as any).L;
    if (!L) return;

    const map = L.map(mapRef.current, {
      zoomControl: false,
      attributionControl: false
    }).setView([35, 38.5], 7);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const cityIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: #b91c1c; width: 8px; height: 8px; border-radius: 50%; border: 2px solid white;"></div>`,
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });

    syrianCities.forEach(city => {
      L.marker([city.lat, city.lng], { icon: cityIcon })
        .addTo(map)
        .bindPopup(city.name);
    });

    const container = mapRef.current;
    if (container) {
      container.style.border = '2px solid #b91c1c';
      container.style.borderRadius = '12px';
      container.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    }

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: '400px', width: '100%', maxWidth: '400px', margin: '0 auto' }}
    />
  );
};

export default SyrianCitiesMap;

