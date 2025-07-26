import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { syrianCities } from '../../data/syrian_cities';

const width = 378;
const height = 368;

const SyrianCitiesMap: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const container = ref.current;

    const svg = d3
      .select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('position', 'absolute')
      .style('top', 0)
      .style('left', 0);

    const projection = d3
      .geoMercator()
      .center([38.9968, 34.8021])
      .scale(2500)
      .translate([width / 2, height / 2]);

    const circles = svg
      .selectAll('circle')
      .data(syrianCities)
      .enter()
      .append('circle')
      .attr('cx', d => projection([d.lng, d.lat])[0])
      .attr('cy', d => projection([d.lng, d.lat])[1])
      .attr('r', 2)
      .attr('fill', '#b91c1c')
      .attr('class', 'city-dot');

    circles
      .on('mouseenter', function () {
        d3.select(this).classed('animate-wobble', true);
      })
      .on('mouseleave', function () {
        d3.select(this).classed('animate-wobble', false);
      });

    return () => {
      svg.remove();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: "url('/slide0007_image015.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        margin: '0 auto',
      }}
    />
  );
};

export default SyrianCitiesMap;
