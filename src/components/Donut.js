import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Donut({ size = 400 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(1, 0.4, 32, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x999999,
      roughness: 0.3,
      metalness: 0.75,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, wireframe: true,
      transparent: true, opacity: 0.05,
    });
    const wireframe = new THREE.Mesh(geometry, wireMat);
    scene.add(wireframe);

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    const pointLight = new THREE.PointLight(0xffffff, 1.2, 100);
    pointLight.position.set(3, 3, 5);
    scene.add(pointLight);
    const rimLight = new THREE.PointLight(0x888888, 0.6, 100);
    rimLight.position.set(-3, -2, -3);
    scene.add(rimLight);

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      torus.rotation.x += 0.008;
      torus.rotation.y += 0.012;
      wireframe.rotation.x = torus.rotation.x;
      wireframe.rotation.y = torus.rotation.y;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  return (
    <div ref={mountRef} style={{ width: size, height: size }} />
  );
}
