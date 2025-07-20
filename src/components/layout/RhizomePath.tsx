import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import * as d3 from 'd3';

export interface RhizomePathHandle {
  addNode: (x: number, y: number) => void;
}

const colors = [
  'var(--fractal-brown)',
  'var(--fractal-green)',
  'var(--fractal-amber)',
  'var(--fractal-blue)'
];

const RhizomePath = forwardRef<RhizomePathHandle>((_, ref) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const nodesRef = useRef<{ x: number; y: number }[]>([]);

  useImperativeHandle(ref, () => ({
    addNode(x: number, y: number) {
      const svg = d3.select(svgRef.current);
      const nodes = nodesRef.current;
      const prev = nodes[nodes.length - 1];
      const color = colors[nodes.length % colors.length];
      nodes.push({ x, y });

      if (prev) {
        const line = svg
          .append('line')
          .attr('x1', prev.x)
          .attr('y1', prev.y)
          .attr('x2', prev.x)
          .attr('y2', prev.y)
          .attr('stroke', color)
          .attr('stroke-width', 2)
          .attr('stroke-linecap', 'round')
          .attr('opacity', 0.8);

        line
          .transition()
          .duration(600)
          .attr('x2', x)
          .attr('y2', y);
      }

      svg
        .append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 0)
        .attr('fill', color)
        .attr('filter', 'url(#rhizome-glow)')
        .transition()
        .duration(600)
        .attr('r', 4);
    }
  }));

  return (
    <svg ref={svgRef} className="pointer-events-none fixed inset-0 z-40">
      <defs>
        <filter id="rhizome-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
});

export default RhizomePath;
