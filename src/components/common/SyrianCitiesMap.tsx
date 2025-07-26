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

    const lonMin = 35.79011;
    const lonMax = 42.14006;
    const latMin = 32.492;
    const latMax = 37.17701;

    const xScale = d3.scaleLinear().domain([lonMin, lonMax]).range([0, width]);
    const yScale = d3.scaleLinear().domain([latMin, latMax]).range([height, 0]);

    const tooltip = d3
      .select(container)
      .append('div')
      .style('position', 'absolute')
      .style('pointer-events', 'none')
      .style('background', 'rgba(0,0,0,0.6)')
      .style('color', '#fff')
      .style('padding', '2px 4px')
      .style('border-radius', '4px')
      .style('font-size', '12px')
      .style('display', 'none');

    svg
      .selectAll('circle')
      .data(syrianCities)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.lng))
      .attr('cy', d => yScale(d.lat))
      .attr('r', 2)
      .attr('fill', '#b91c1c')
      .on('mouseenter', (event, d) => {
        tooltip.style('display', 'block').text(d.name);
      })
      .on('mousemove', event => {
        tooltip
          .style('left', event.offsetX + 10 + 'px')
          .style('top', event.offsetY + 10 + 'px');
      })
      .on('mouseleave', () => {
        tooltip.style('display', 'none');
      });

    return () => {
      svg.remove();
      tooltip.remove();
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
