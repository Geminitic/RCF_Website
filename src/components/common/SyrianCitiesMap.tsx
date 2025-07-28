import React, { useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import { syrianCities } from '../../data/syrian_cities';

const width = 378;
const height = 368;

const SyrianCitiesMap: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const denseCities = useMemo(() => {
    const points = [] as { name: string; lat: number; lng: number }[];
    const total = 6000;
    const base = syrianCities;
    for (let i = 0; i < total; i++) {
      const city = base[i % base.length];
      const factor = Math.random() - 0.5;
      const lat = city.lat + factor * 0.05;
      const lng = city.lng + (Math.random() - 0.5) * 0.05;
      points.push({ name: `${city.name} ${Math.floor(i / base.length) + 1}`, lat, lng });
    }
    return points;
  }, []);

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

    const lonExtent = d3.extent(denseCities, d => d.lng) as [number, number];
    const latExtent = d3.extent(denseCities, d => d.lat) as [number, number];
    const lonMin = lonExtent[0];
    const lonMax = lonExtent[1];
    const latMin = latExtent[0];
    const latMax = latExtent[1];

    const lonRange = lonMax - lonMin;
    const latRange = latMax - latMin;
    const baseScale = Math.min(width / lonRange, height / latRange);
    const xOffset = (width - lonRange * baseScale) / 2;
    const yOffset = (height - latRange * baseScale) / 2;

    const xScale = d3
      .scaleLinear()
      .domain([lonMin, lonMax])
      .range([xOffset, width - xOffset]);
    const yScale = d3
      .scaleLinear()
      .domain([latMin, latMax])
      .range([height - yOffset, yOffset]);

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

    const defs = svg.append('defs');
    const gradient = defs
      .append('linearGradient')
      .attr('id', 'cityGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%');
    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#6B46C1');
    gradient.append('stop').attr('offset', '33%').attr('stop-color', '#0EA5E9');
    gradient.append('stop').attr('offset', '66%').attr('stop-color', '#fb923c');
    gradient.append('stop').attr('offset', '100%').attr('stop-color', '#EF4444');

    const circles = svg
      .selectAll('circle')
      .data(denseCities)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.lng))
      .attr('cy', d => yScale(d.lat))
      .attr('r', 1.5)
      .attr('fill', 'url(#cityGradient)');

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
  }, [denseCities]);

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
