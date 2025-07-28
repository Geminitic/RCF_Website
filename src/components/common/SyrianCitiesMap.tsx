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

const padding = 4;
const lonExtent = d3.extent(syrianCities, c => c.lng) as [number, number];
const latExtent = d3.extent(syrianCities, c => c.lat) as [number, number];

const xScale = d3
  .scaleLinear()
  .domain(lonExtent)
  .range([padding, width - padding]);
const yScale = d3
  .scaleLinear()
  .domain(latExtent)
  .range([height - padding, padding]);

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

    const showTooltip = (x: number, y: number, name: string) => {
      tooltip
        .style('display', 'block')
        .style('left', x + 10 + 'px')
        .style('top', y + 10 + 'px')
        .text(name);
    };

    const hideTooltip = () => {
      tooltip.style('display', 'none');
    };

    const colorScale = d3
      .scaleSequential(
        d3.interpolateRgbBasis([
          '#6B46C1',
          '#0EA5E9',
          '#fb923c',
          '#EF4444',
          '#F59E0B',
        ])
      )
      .domain([0, syrianCities.length - 1]);

    const circles = svg
      .selectAll('circle')
      .data(syrianCities)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.lng))
      .attr('cy', d => yScale(d.lat))
      .attr('r', 1.5)
      .attr('fill', (_, i) => colorScale(i));

    circles
      .on('mouseenter', (event, d) => {
        const [x, y] = d3.pointer(event);
        showTooltip(x, y, d.name);
      })
      .on('mousemove', event => {
        const [x, y] = d3.pointer(event);
        tooltip.style('left', x + 10 + 'px').style('top', y + 10 + 'px');
      })
      .on('mouseleave', hideTooltip)
      .on('touchstart', (event, d) => {
        const [x, y] = d3.pointer(event);
        showTooltip(x, y, d.name);
      })
      .on('touchmove', event => {
        const [x, y] = d3.pointer(event);
        tooltip.style('left', x + 10 + 'px').style('top', y + 10 + 'px');
      })
      .on('touchend touchcancel', hideTooltip);

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
