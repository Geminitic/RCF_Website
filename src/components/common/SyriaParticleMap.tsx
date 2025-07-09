import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { syrianCoordinates } from '../../data/syriaMapCoords';

const SyriaParticleMap: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const latitudes = syrianCoordinates.map(c => c.lat);
    const longitudes = syrianCoordinates.map(c => c.lng);
    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);

    const width = 4;
    const height = 4;
    const particlesPerCoord = 50;
    const particleCount = syrianCoordinates.length * particlesPerCoord;
    const positions = new Float32Array(particleCount * 3);

    const toXY = (lat: number, lng: number) => {
      const x = ((lng - minLng) / (maxLng - minLng)) * width - width / 2;
      const y = -((lat - minLat) / (maxLat - minLat)) * height + height / 2;
      return [x, y];
    };

    syrianCoordinates.forEach((coord, index) => {
      const [x, y] = toXY(coord.lat, coord.lng);
      for (let i = 0; i < particlesPerCoord; i++) {
        const base = (index * particlesPerCoord + i) * 3;
        positions[base] = x + (Math.random() - 0.5) * 0.05;
        positions[base + 1] = y + (Math.random() - 0.5) * 0.05;
        positions[base + 2] = 0;
      }
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xb91c1c, size: 0.02 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.z += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '400px' }} />;
};

export default SyriaParticleMap;
