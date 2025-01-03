import * as THREE from 'three';

import { type Component } from '@/lib/component';

export default class BasicPage implements Component {
  render($h: HTMLElement): void {
    const width = $h.clientWidth;
    const height = window.innerHeight - $h.offsetTop;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const cubes: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(
          Math.random(),
          Math.random(),
          Math.random(),
        ),
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = -4 + i * 2;
      scene.add(cube);
      cubes.push(cube);
    }

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    $h.appendChild(renderer.domElement);

    let cameraStep = 0.2;

    function animate(): void {
      requestAnimationFrame(animate);
      cubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });
      camera.position.z += cameraStep;
      if (camera.position.z > 100 || camera.position.z < 4) {
        cameraStep = -cameraStep;
      }
      renderer.render(scene, camera);
    }

    animate();
  }
}
