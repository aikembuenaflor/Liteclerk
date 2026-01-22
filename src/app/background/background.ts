import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-background',
  standalone: true,
  templateUrl: './background.html',
  styleUrls: ['./background.css'],
})
export class BackgroundComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private mouseX = 0;
  private mouseY = 0;

  ngAfterViewInit() {
    // ✅ Only initialize Three.js in browser
    if (typeof window !== 'undefined') {
      this.initScene();
      this.animate();
    }
  }

  initScene() {
    if (!this.canvasRef) return;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 100;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.BufferGeometry();
    const count = 2500;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 500;
      positions[i + 1] = (Math.random() - 0.5) * 500;
      positions[i + 2] = (Math.random() - 0.5) * 500;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 1.4,
      color: '#19bdfb',
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  animate = () => {
    if (typeof window === 'undefined') return; // ✅ stop SSR errors
    requestAnimationFrame(this.animate);

    this.particles.rotation.y += 0.0006 + this.mouseX * 0.00005;
    this.particles.rotation.x += 0.0004 + this.mouseY * 0.00005;

    this.renderer.render(this.scene, this.camera);
  };

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (typeof window === 'undefined') return; // ✅ SSR-safe
    this.mouseX = (event.clientX - window.innerWidth / 2) / 1000;
    this.mouseY = (event.clientY - window.innerHeight / 2) / 1000;
  }

  @HostListener('window:resize')
  onResize() {
    if (typeof window === 'undefined') return; // ✅ SSR-safe
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
