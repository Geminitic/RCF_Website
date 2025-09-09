import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Search, Info, X, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { DATA_SOURCES } from '../../services/data/dataSources';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: string })
  ._getIconUrl;

const svgIcon = (color: string) => {
  return L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="24" height="24">
      <path d="M12 0c-4.4 0-8 3.6-8 8 0 5.4 7.1 15.5 7.4 16 0.2 0.3 0.6 0.5 1 0.5 0.4 0 0.8-0.2 1-0.5 0.3-0.5 7.6-10.6 7.6-16 0-4.4-3.6-8-8-8zM12 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
    </svg>`,
    className: 'custom-div-icon',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

interface DataSourceMarker {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  url: string;
  description: {
    en: string;
    ar: string;
  };
  languages: string[];
  category: string;
  position: [number, number];
}

const DATA_SOURCE_MARKERS: DataSourceMarker[] = [
  {
    id: 'syria-direct',
    name: {
      en: 'Syria Direct',
      ar: 'سوريا دايركت',
    },
    url: 'https://syriadirect.org/',
    description: {
      en: 'Comprehensive news platform covering housing, land, property issues.',
      ar: 'منصة إخبارية شاملة تغطي قضايا الإسكان والأراضي والممتلكات.',
    },
    languages: ['English', 'Arabic', 'Turkish'],
    category: 'news-media',
    position: [33.5138, 36.2765],
  },
  {
    id: 'syrian-observer',
    name: {
      en: 'The Syrian Observer',
      ar: 'المراقب السوري',
    },
    url: 'https://syrianobserver.com',
    description: {
      en: 'Daily online news service focusing on Syrian political developments.',
      ar: 'خدمة إخبارية يومية تركز على التطورات السياسية السورية.',
    },
    languages: ['English'],
    category: 'news-media',
    position: [36.2021, 37.1343],
  },
  {
    id: 'unhcr',
    name: {
      en: 'UNHCR Syria',
      ar: 'مفوضية اللاجئين - سوريا',
    },
    url: 'https://reporting.unhcr.org/operational/situations/syria-situation',
    description: {
      en: 'Provides operational updates on Syrian refugees and humanitarian needs.',
      ar: 'توفر تحديثات تشغيلية عن اللاجئين السوريين والاحتياجات الإنسانية.',
    },
    languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
    category: 'data-aggregators',
    position: [33.8869, 35.5131],
  },
  {
    id: 'ocha',
    name: {
      en: 'OCHA Syria',
      ar: 'أوتشا سوريا',
    },
    url: 'https://www.unocha.org/syrian-arab-republic',
    description: {
      en: 'Manages the Syria Humanitarian Fund for emergency response.',
      ar: 'يدير صندوق سوريا الإنساني للاستجابة للطوارئ.',
    },
    languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
    category: 'data-aggregators',
    position: [33.5225, 36.3097],
  },
  {
    id: 'scpr',
    name: {
      en: 'Syrian Center for Policy Research',
      ar: 'المركز السوري لبحوث السياسات',
    },
    url: 'https://scpr-syria.org/',
    description: {
      en: 'Independent think tank conducting policy-oriented research.',
      ar: 'مركز فكر مستقل يجري أبحاثاً موجهة للسياسات.',
    },
    languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
    category: 'research-institutions',
    position: [34.8021, 38.9968],
  },
  {
    id: 'omran-center',
    name: {
      en: 'Omran Center for Strategic Studies',
      ar: 'مركز عمران للدراسات الاستراتيجية',
    },
    url: 'https://omranstudies.org/',
    description: {
      en: 'Focuses on objective analysis of Syria and the region.',
      ar: 'يركز على التحليل الموضوعي لسوريا والمنطقة.',
    },
    languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
    category: 'research-institutions',
    position: [36.2166, 37.1367],
  },
  {
    id: 'egov',
    name: {
      en: 'Syrian E-Government Portal',
      ar: 'بوابة الحكومة الإلكترونية السورية',
    },
    url: 'https://egov.sy/page/en/132/0/home.html',
    description: {
      en: 'Official e-government portal for citizen engagement.',
      ar: 'بوابة الحكومة الإلكترونية الرسمية لمشاركة المواطنين.',
    },
    languages: ['English', 'Arabic', 'Turkish', 'Farsi', 'Hebrew'],
    category: 'government-sources',
    position: [33.5148, 36.2968],
  },
  {
    id: 'github-osint',
    name: {
      en: 'GitHub - OSINT-Tools-Syria',
      ar: 'جيثب - أدوات OSINT سوريا',
    },
    url: 'https://github.com/paulpogoda/OSINT-Tools-Syria',
    description: {
      en: 'Repository of OSINT resources for Syria research.',
      ar: 'مستودع موارد OSINT لأبحاث سوريا.',
    },
    languages: ['English', 'Arabic'],
    category: 'osint-resources',
    position: [35.9132, 38.0132],
  },
  {
    id: 'arabad',
    name: {
      en: 'ArabAd',
      ar: 'عرب آد',
    },
    url: 'https://www.arabadonline.com/en/details/advertising/the-advertising-industry-in-syria-rising-from-the-ashes-of-war',
    description: {
      en: 'Insights into the Syrian advertising industry.',
      ar: 'رؤى حول صناعة الإعلان السورية.',
    },
    languages: ['English', 'Arabic'],
    category: 'advertising-marketing',
    position: [35.1413, 36.7551],
  },
];

const createCategoryIcon = (category: string) => {
  const getIconColor = (cat: string) => {
    switch (cat) {
      case 'news-media':
        return '#3B82F6';
      case 'data-aggregators':
        return '#10B981';
      case 'research-institutions':
        return '#8B5CF6';
      case 'government-sources':
        return '#EF4444';
      case 'osint-resources':
        return '#F59E0B';
      case 'advertising-marketing':
        return '#F97316';
      default:
        return '#6B7280';
    }
  };

  return svgIcon(getIconColor(category));
};

const SetBoundsControl = ({ markers }: { markers: DataSourceMarker[] }) => {
  const map = useMap();

  useEffect(() => {
    if (markers.length > 0) {
      const latLngs = markers.map((marker) =>
        L.latLng(marker.position[0], marker.position[1])
      );
      const bounds = L.latLngBounds(latLngs);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, markers]);

  return null;
};

const MarkerCluster = ({
  markers,
  isArabic,
  getCategoryColor,
  getCategoryName,
}: {
  markers: DataSourceMarker[];
  isArabic: boolean;
  getCategoryColor: (category: string) => string;
  getCategoryName: (category: string) => string;
}) => {
  return (
    <>
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={createCategoryIcon(marker.category)}
        >
          <Popup>
            <div className={isArabic ? 'text-right' : 'text-left'}>
              <h3 className="font-bold text-slate-900">
                {isArabic ? marker.name.ar : marker.name.en}
              </h3>

              <div
                className={`text-xs mb-2 inline-block px-2 py-1 rounded-full ${getCategoryColor(marker.category)} text-white`}
              >
                {getCategoryName(marker.category)}
              </div>

              <p className="text-sm text-slate-600 mb-2">
                {isArabic ? marker.description.ar : marker.description.en}
              </p>

              <div className="flex items-center text-xs text-slate-500 mb-2">
                <MapPin className="h-3 w-3 mr-1" />
                <span>
                  {`${marker.position[0].toFixed(2)}°N, ${marker.position[1].toFixed(2)}°E`}
                </span>
              </div>

              <a
                href={marker.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                {isArabic ? 'زيارة الموقع' : 'Visit Website'}
                <span className={isArabic ? 'mr-1 rotate-180' : 'ml-1'}>→</span>
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

const DataSourcesMap: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const isArabic = currentLanguage.code === 'ar';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const filteredMarkers = DATA_SOURCE_MARKERS.filter((marker) => {
    const matchesSearch = searchQuery
      ? (isArabic ? marker.name.ar : marker.name.en)
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        (isArabic ? marker.description.ar : marker.description.en)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory = selectedCategory
      ? marker.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'news-media':
        return 'bg-blue-500';
      case 'data-aggregators':
        return 'bg-green-500';
      case 'research-institutions':
        return 'bg-purple-500';
      case 'government-sources':
        return 'bg-red-500';
      case 'osint-resources':
        return 'bg-yellow-500';
      case 'advertising-marketing':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryName = (_category: string) => {
    const categoryData = DATA_SOURCES.find((cat) => cat.id === _category);
    return categoryData
      ? isArabic
        ? categoryData.title.ar
        : categoryData.title.en
      : _category;
  };

  useEffect(() => {
    setMapLoaded(true);

    return () => {
      setMapLoaded(false);
    };
  }, []);

  return (
    <div className="data-sources-map bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 relative">
      <div className="mb-4">
        <h2
          className={`text-2xl font-bold mb-2 text-purple-800 ${isArabic ? 'text-right' : 'text-left'}`}
        >
          {isArabic ? 'خريطة مصادر البيانات' : 'Data Sources Map'}
        </h2>
        <div className={`relative ${isArabic ? 'text-right' : 'text-left'}`}>
          <input
            type="text"
            placeholder={
              isArabic ? 'البحث عن مصادر البيانات...' : 'Search data sources...'
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full p-2 border border-slate-200 rounded-lg ${isArabic ? 'text-right pr-10 pl-4' : 'text-left pl-10 pr-4'}`}
            aria-label={
              isArabic ? 'البحث عن مصادر البيانات' : 'Search data sources'
            }
          />
          <Search
            className={`absolute top-3 ${isArabic ? 'right-3' : 'left-3'} text-slate-400 h-4 w-4`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className={`absolute top-3 ${isArabic ? 'left-3' : 'right-3'} text-slate-400 h-4 w-4 hover:text-slate-600`}
              aria-label={isArabic ? 'مسح البحث' : 'Clear search'}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className={`mb-4 ${isArabic ? 'text-right' : 'text-left'}`}>
        <div
          className={`flex flex-wrap gap-2 mb-2 ${isArabic ? 'justify-end' : 'justify-start'}`}
        >
          <button
            className={`text-xs px-2 py-1 rounded-full transition-colors ${
              selectedCategory === null
                ? 'bg-purple-100 text-purple-800'
                : 'bg-slate-100 text-slate-600'
            }`}
            onClick={() => setSelectedCategory(null)}
            aria-label={isArabic ? 'عرض جميع الفئات' : 'Show all categories'}
          >
            {isArabic ? 'الكل' : 'All'}
          </button>
          {DATA_SOURCES.map((_category, index) => (
            <button
              key={index}
              className={`flex items-center ${isArabic ? 'flex-row-reverse' : ''} cursor-pointer hover:bg-slate-50 rounded px-1`}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === _category.id ? null : _category.id
                )
              }
              role="button"
              aria-label={`${isArabic ? 'تصفية بواسطة' : 'Filter by'} ${isArabic ? _category.title.ar : _category.title.en}`}
            >
              <div
                className={`h-3 w-3 ${getCategoryColor(_category.id)} rounded-full ${isArabic ? 'ml-1' : 'mr-1'}`}
              ></div>
              <span className="text-xs text-slate-600">
                {isArabic ? _category.title.ar : _category.title.en}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="map-container h-96 rounded-lg overflow-hidden relative">
        {mapLoaded && (
          <MapContainer
            center={[35.0, 38.0]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            ref={(map) => {
              if (map) {
                mapRef.current = map;
              }
            }}
            zoomControl={false}
          >
            <div className="absolute z-1000 bottom-4 right-4">
              <div className="leaflet-control leaflet-bar">
                <button
                  className="bg-white h-8 w-8 flex items-center justify-center hover:bg-gray-100 border-b"
                  onClick={() => mapRef.current?.zoomIn()}
                >
                  <span className="text-xl">+</span>
                </button>
                <button
                  className="bg-white h-8 w-8 flex items-center justify-center hover:bg-gray-100"
                  onClick={() => mapRef.current?.zoomOut()}
                >
                  <span className="text-xl">−</span>
                </button>
              </div>
            </div>

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <SetBoundsControl markers={filteredMarkers} />

            <MarkerCluster
              markers={filteredMarkers}
              isArabic={isArabic}
              getCategoryColor={getCategoryColor}
              getCategoryName={getCategoryName}
            />
          </MapContainer>
        )}

        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 rounded-lg">
            <div className="text-slate-500">
              {isArabic ? 'جاري تحميل الخريطة...' : 'Loading map...'}
            </div>
          </div>
        )}

        {filteredMarkers.length === 0 && mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg z-10">
            <div className="text-center p-4">
              <Info className="mx-auto h-6 w-6 text-slate-400 mb-2" />
              <p className="text-slate-600">
                {isArabic
                  ? 'لا توجد مصادر بيانات تطابق معايير البحث الخاصة بك'
                  : 'No data sources match your search criteria'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="mt-2 text-sm text-blue-600 hover:text-blue-800"
              >
                {isArabic ? 'إعادة ضبط البحث' : 'Reset search'}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={`mt-4 ${isArabic ? 'text-right' : 'text-left'}`}>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">
          {isArabic ? 'دليل الفئات' : 'Category Legend'}
        </h3>
        <div
          className={`flex flex-wrap gap-2 ${isArabic ? 'justify-end' : 'justify-start'}`}
        >
          {DATA_SOURCES.map((_category, index) => (
            <button
              key={index}
              className={`flex items-center ${isArabic ? 'flex-row-reverse' : ''} cursor-pointer hover:bg-slate-50 rounded px-1`}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === _category.id ? null : _category.id
                )
              }
              role="button"
              aria-label={`${isArabic ? 'تصفية بواسطة' : 'Filter by'} ${isArabic ? _category.title.ar : _category.title.en}`}
            >
              <div
                className={`h-3 w-3 ${getCategoryColor(_category.id)} rounded-full ${isArabic ? 'ml-1' : 'mr-1'}`}
              ></div>
              <span className="text-xs text-slate-600">
                {isArabic ? _category.title.ar : _category.title.en}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div
        className={`mt-3 text-xs text-slate-500 ${isArabic ? 'text-right' : 'text-left'}`}
      >
        {isArabic
          ? `عرض ${filteredMarkers.length} من ${DATA_SOURCE_MARKERS.length} مصادر`
          : `Showing ${filteredMarkers.length} of ${DATA_SOURCE_MARKERS.length} sources`}
      </div>
    </div>
  );
};

export { DataSourcesMap };
export default DataSourcesMap;
