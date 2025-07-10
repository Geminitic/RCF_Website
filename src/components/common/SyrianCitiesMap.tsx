import React from 'react';
import * as d3 from 'd3-geo';
import syrianCities from '../../data/syrian_cities_large';

const width = 378;
const height = 368;

const projection = d3.geoMercator()
  .center([38.9968, 34.8021])
  .scale(2500)
  .translate([width / 2, height / 2]);

const SyrianCitiesMap: React.FC = () => (
  <div
    style={{
      position: 'relative',
      width: `${width}px`,
      height: `${height}px`,
      margin: '0 auto',
      backgroundImage: "url('/slide0007_image015.png')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {syrianCities.map(city => {
      const [x, y] = projection([city.lng, city.lat]);
      return (
        <div
          key={city.name}
          className="city-dot"
          style={{
            position: 'absolute',
            left: x - 2,
            top: y - 2,
            width: 4,
            height: 4,
            borderRadius: '50%',
            backgroundColor: '#b91c1c'
          }}
        />
      );
    })}
  </div>
);

export default SyrianCitiesMap;
