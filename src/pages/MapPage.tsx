import React from 'react';
import InteractiveMap from '../components/home/InteractiveMap';

const MapPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50 pt-16">
    <InteractiveMap />
  </div>
);

export default MapPage;
