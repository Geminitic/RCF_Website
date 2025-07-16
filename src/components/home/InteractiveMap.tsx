import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface MapItem {
  id: string;
  lat: number;
  lng: number;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  date?: string;
}

const InteractiveMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<MapItem | null>(null);
  const { t, currentLanguage } = useLanguage();

  const cities: MapItem[] = [
    {
      id: 'latakia',
      lat: 35.5311,
      lng: 35.7796,
      name: 'Latakia (HQ)',
      nameAr: 'اللاذقية (المقر الرئيسي)',
      description: 'Headquarters of Rhizome Syria',
      descriptionAr: 'المقر الرئيسي لريزوم سوريا'
    },
    {
      id: 'aleppo',
      lat: 36.2021,
      lng: 37.1343,
      name: 'Aleppo',
      nameAr: 'حلب',
      description: 'Aleppo Roots, Crystal Media, Masraha, Syrian Sect, Dawen',
      descriptionAr: 'جذور حلب، كريستال ميديا، مسرحة، السوريان سكت، دوّن'
    },
    {
      id: 'izazz',
      lat: 36.5861,
      lng: 37.0462,
      name: 'Izazz',
      nameAr: 'إعزاز',
      description: 'Anamel Baidaa',
      descriptionAr: 'أنامل بيضاء'
    },
    {
      id: 'homs',
      lat: 34.7300,
      lng: 36.7200,
      name: 'Homs',
      nameAr: 'حمص',
      description: 'Syrian Youth Compass',
      descriptionAr: 'بوصلة الشباب السوري'
    },
    {
      id: 'salamiah',
      lat: 35.0110,
      lng: 37.0533,
      name: 'Salamiah',
      nameAr: 'سلمية',
      description: 'Amal Organization, New Horizon',
      descriptionAr: 'منظمة أمل، آفاق جديدة'
    },
    {
      id: 'damascus',
      lat: 33.5138,
      lng: 36.2765,
      name: 'Damascus',
      nameAr: 'دمشق',
      description: 'Mini TV, Dopamine',
      descriptionAr: 'ميني تي في، دوبامين'
    }
  ];

  const events: MapItem[] = [
    {
      id: 'rural-engagement',
      lat: 35.5311,
      lng: 35.7796,
      name: 'Rural Engagement',
      nameAr: 'المشاركة الريفية',
      description: 'Ongoing rural engagement in Latakia',
      descriptionAr: 'المشاركة الريفية الجارية في اللاذقية'
    },
    {
      id: 'aleppo-roots-event',
      lat: 36.2021,
      lng: 37.1443,
      name: 'Aleppo Roots Event',
      nameAr: 'فعالية جذور حلب',
      description: 'Aleppo Roots - March 15 2025',
      descriptionAr: 'جذور حلب - 15 مارس 2025',
      date: '2025-03-15'
    },
    {
      id: 'castle-eid',
      lat: 36.2121,
      lng: 37.1343,
      name: 'Castle Eid Activity',
      nameAr: 'فعالية عيد القلعة',
      description: 'Castle Eid Activity - June 10 2025',
      descriptionAr: 'فعالية عيد القلعة - 10 حزيران 2025',
      date: '2025-06-10'
    }
  ];

  const towns: { id: string; lat: number; lng: number }[] = [
    { id: 'qanjarah', lat: 35.627, lng: 35.915 },
    { id: 'jannata', lat: 35.63, lng: 35.92 },
    { id: 'kirsana', lat: 35.58, lng: 35.95 },
    { id: 'kharbet', lat: 35.69, lng: 36.02 },
    { id: 'mashqita', lat: 35.72, lng: 36.02 },
    { id: 'ainbayda', lat: 35.62, lng: 35.92 },
    { id: 'rasbasit', lat: 35.92, lng: 35.98 },
    { id: 'qardaha', lat: 35.55, lng: 36.02 },
    { id: 'bahloulieh', lat: 35.85, lng: 35.97 },
    { id: 'haffa', lat: 35.74, lng: 36.1 },
    { id: 'qutailibiyah', lat: 35.42, lng: 35.95 },
    { id: 'beityashout', lat: 35.25, lng: 36.0 },
    { id: 'muzayra', lat: 35.63, lng: 36.02 },
    { id: 'qalaya', lat: 35.84, lng: 36.14 },
    { id: 'qadmus', lat: 34.9, lng: 36.0 },
    { id: 'safita', lat: 34.82, lng: 36.15 },
    { id: 'dreikish', lat: 35.05, lng: 36.13 },
    { id: 'masyaf', lat: 35.06, lng: 36.29 },
    { id: 'deirmama', lat: 35.07, lng: 36.28 },
    { id: 'baiyadiya', lat: 35.1, lng: 36.26 },
    { id: 'mashteh', lat: 34.96, lng: 36.1 },
    { id: 'sqilbieh', lat: 35.37, lng: 36.39 },
    { id: 'sheikhbadr', lat: 34.96, lng: 36.05 },
    { id: 'khreibat', lat: 34.9, lng: 35.97 }
  ];

  const globalNodes: MapItem[] = [
    {
      id: 'edmonton',
      lat: 53.5461,
      lng: -113.4938,
      name: 'Edmonton',
      nameAr: 'إدمونتون',
      description: 'CO*LAB, RE:VITA, HQ',
      descriptionAr: 'CO*LAB، RE:VITA، المقر'
    }
  ];

  useEffect(() => {
    // Initialize Leaflet map
    if (typeof window !== 'undefined' && mapRef.current) {
      const L = (window as any).L;
      if (L) {
        const map = L.map(mapRef.current, {
          zoomControl: false,
          attributionControl: false
        }).setView([40.0, -30.0], 2);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          subdomains: 'abcd',
          maxZoom: 19
        }).addTo(map);

        // Add zoom control to a specific position
        L.control.zoom({
          position: 'bottomright'
        }).addTo(map);

        // Custom marker icon
        const customIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: #b91c1c; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`,
          iconSize: [15, 15],
          iconAnchor: [7, 7]
        });

        const eventIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: #164e63; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`,
          iconSize: [15, 15],
          iconAnchor: [7, 7]
        });

        const townIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: #15803d; width: 8px; height: 8px; border-radius: 50%; border: 1px solid white;"></div>`,
          iconSize: [10, 10],
          iconAnchor: [5, 5]
        });

        cities.forEach(item => {
          L.marker([item.lat, item.lng], { icon: customIcon })
            .addTo(map)
            .on('click', () => setSelectedItem(item));
        });

        events.forEach(item => {
          L.marker([item.lat, item.lng], { icon: eventIcon })
            .addTo(map)
            .on('click', () => setSelectedItem(item));
        });

        const townMarkers = towns.map(t =>
          L.marker([t.lat, t.lng], { icon: townIcon })
        );

        const edmontonMarker = L.marker([53.5461, -113.4938], { icon: customIcon });

        const updateVisibility = () => {
          if (map.getZoom() >= 8) {
            townMarkers.forEach(m => m.addTo(map));
          } else {
            townMarkers.forEach(m => map.removeLayer(m));
          }

          if (map.getZoom() <= 4) {
            edmontonMarker.addTo(map).on('click', () => setSelectedItem(globalNodes[0]));
          } else {
            map.removeLayer(edmontonMarker);
          }
        };

        updateVisibility();
        map.on('zoomend', updateVisibility);

        // Add custom styles to the map
        const mapContainer = mapRef.current;
        if (mapContainer) {
          mapContainer.style.border = '2px solid #b91c1c';
          mapContainer.style.borderRadius = '12px';
          mapContainer.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        }

        return () => {
          map.off('zoomend', updateVisibility);
          map.remove();
        };
      }
    }
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl font-bold text-center mb-8 text-emerald-800 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`} style={{ fontFamily: '"Playfair Display", "Noto Sans Arabic", serif' }}>
            {t('map-title', 'Interactive Activities Map', 'خريطة الأنشطة التفاعلية')}
          </h2>
          <p className={`text-center text-gray-600 mb-10 max-w-3xl mx-auto ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
            {t(
              'map-description',
              'Explore ongoing projects and activities. Click a marker for more details.',
              'استكشف المشاريع والأنشطة الجارية. انقر على علامة للحصول على مزيد من التفاصيل.'
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              ref={mapRef}
              className="map-container"
              style={{ height: '400px', width: '400px', margin: '0 auto' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {selectedItem ? (
              <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                <h3 className={`text-xl font-semibold mb-4 text-emerald-700 ${
                  currentLanguage.code === 'ar' ? 'font-arabic' : ''
                }`}>
                  {t('project-name', selectedItem.name, selectedItem.nameAr)}
                </h3>
                <p className={`text-gray-600 mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('project-description', selectedItem.description, selectedItem.descriptionAr)}
                </p>
                {selectedItem.date && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
                    <span>{new Date(selectedItem.date).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-6 text-center border border-emerald-100 shadow-lg">
                <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t('select-project', 'Select a Location', 'اختر موقعاً')}
                </h3>
                <p className={`text-gray-600 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                  {t(
                    'click-marker',
                    'Click on a marker to view details',
                    'انقر على علامة لعرض التفاصيل'
                  )}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;