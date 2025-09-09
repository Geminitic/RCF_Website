import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import syriaDots from '../../data/syria_dots.json';

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

    const dots = (syriaDots as { x: number; y: number }[]).map((d, i) => ({
      ...d,
      name: `Town ${i + 1}`,
    }));

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
      .data(dots)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
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
