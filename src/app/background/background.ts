import { Component } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { MoveDirection, OutMode, Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [NgxParticlesModule], // Required for <ngx-particles> to work
  template: `
    <ngx-particles
      [id]="'tsparticles'"
      [options]="particlesOptions"
      [particlesInit]="particlesInit"
      style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
    </ngx-particles>
  `
})
export class BackgroundComponent {
  // 2026 Futuristic Cyber Theme (Blue & Green)
  public particlesOptions = {
    background: { color: { value: "#000814" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" } // Interactive "web" effect on hover
      },
      modes: {
        grab: { distance: 140, links: { opacity: 1 } }
      }
    },
    particles: {
      color: { value: ["#00f5d4", "#00b4d8"] }, // Neon Green & Cyber Blue
      links: {
        color: "#00b4d8",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: MoveDirection.none,
        outModes: { default: OutMode.out }
      },
      number: { value: 80 },
      size: { value: { min: 1, max: 3 } }
    }
  };

  // This method initializes the particles engine
  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}
