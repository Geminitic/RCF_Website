import React, { useEffect, useRef } from 'react';
import { syrianCities } from '../../data/syrian_cities';

const SyriaLeafletMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const L = (window as any).L;
    if (!L) return;

    const map = L.map(mapRef.current, {
      zoomControl: true,
      attributionControl: false,
    }).setView([35, 38.5], 6);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 9,
    }).addTo(map);

    const icon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: #b91c1c; width: 8px; height: 8px; border-radius: 50%; border: 1px solid white;"></div>`,
      iconSize: [10, 10],
      iconAnchor: [5, 5],
    });

    syrianCities.forEach(city => {
      L.marker([city.lat, city.lng], { icon }).addTo(map).bindPopup(city.name);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ height: '400px', width: '100%', maxWidth: '400px', margin: '0 auto' }} />;
};

export default SyriaLeafletMap;
