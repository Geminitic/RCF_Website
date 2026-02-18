import fs from 'fs';
const cities = JSON.parse(fs.readFileSync('src/data/syrian_cities.json', 'utf-8'));
const width = 378;
const height = 368;
const minLat = 32.492;
const maxLat = 37.17701;
const minLng = 35.79011;
const maxLng = 42.14006;
const mapCities = cities.map(c => {
  let x = ((c.lng - minLng) / (maxLng - minLng)) * width;
  let y = height - ((c.lat - minLat) / (maxLat - minLat)) * height;
  x = Math.min(Math.max(x, 0), width - 1);
  y = Math.min(Math.max(y, 0), height - 1);
  return { name: c.name, x: Math.round(x), y: Math.round(y) };
});
fs.writeFileSync('src/data/syrian_cities_map.json', JSON.stringify(mapCities, null, 2));
console.log(`Generated ${mapCities.length} entries`);
