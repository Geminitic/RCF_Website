import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { syrianCities } from '../../data/syrian_cities';

const SyrianCitiesMap: React.FC = () => (
  <div style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
    <MapContainer
      center={[34.8021, 38.9968]}
      zoom={6}
      style={{ height: 400, width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {syrianCities.map(city => (
        <CircleMarker
          key={city.name}
          center={[city.lat, city.lng]}
          radius={4}
          pathOptions={{ color: '#b91c1c', fillColor: '#b91c1c', fillOpacity: 1 }}
        >
          <Tooltip direction="top" offset={[0, -2]} opacity={0.9}>
            {city.name}
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  </div>
);

export default SyrianCitiesMap;
