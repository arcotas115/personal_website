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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(1, 0.38, 48, 100);

    // main solid - semi-transparent, ghostly
    const solidMat = new THREE.MeshPhysicalMaterial({
      color: 0xaaaaaa,
      roughness: 0.2,
      metalness: 0.9,
      transparent: true,
      opacity: 0.35,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const solid = new THREE.Mesh(geometry, solidMat);
    scene.add(solid);

    // wireframe overlay - the main visual
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xcccccc,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireframe = new THREE.Mesh(geometry, wireMat);
    scene.add(wireframe);

    // bright edge wireframe
    const edgeGeo = new THREE.TorusGeometry(1, 0.38, 16, 32);
    const edgeMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    const edgeWire = new THREE.Mesh(edgeGeo, edgeMat);
    scene.add(edgeWire);

    // lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const keyLight = new THREE.PointLight(0xffffff, 1.5, 100);
    keyLight.position.set(4, 2, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x888888, 0.8, 100);
    rimLight.position.set(-3, 3, -4);
    scene.add(rimLight);

    const bottomLight = new THREE.PointLight(0x444444, 0.4, 100);
    bottomLight.position.set(0, -4, 2);
    scene.add(bottomLight);

    // mouse interaction - subtle tilt
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', onMouseMove);

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      const baseRotX = Date.now() * 0.0004;
      const baseRotY = Date.now() * 0.0006;

      solid.rotation.x = baseRotX + mouseY;
      solid.rotation.y = baseRotY + mouseX;
      wireframe.rotation.x = solid.rotation.x;
      wireframe.rotation.y = solid.rotation.y;
      edgeWire.rotation.x = solid.rotation.x;
      edgeWire.rotation.y = solid.rotation.y;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      geometry.dispose();
      edgeGeo.dispose();
      solidMat.dispose();
      wireMat.dispose();
      edgeMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  return (
    <div ref={mountRef} style={{
      width: size, height: size,
      filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.04))',
    }} />
  );
}