import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './background/background'; 
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { NgxParticlesModule } from '@tsparticles/angular';
import { MoveDirection, OutMode, Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { FooterComponent } from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgxParticlesModule,
    RouterOutlet,
    BackgroundComponent,
    NavbarComponent,
    FooterComponent
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // Changed from 'private isBrowser' to 'public isBrowser' (or just remove 'private')
  public isBrowser: boolean; 

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId); 
  }

  // Define it as a class property
  public particlesOptions = {
    background: { color: { value: "#000814" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }
      },
      modes: {
        grab: { distance: 140, links: { opacity: 1 } }
      }
    },
    particles: {
      color: { value: ["#00f5d4", "#00b4d8"] },
      links: {
        color: "#00b4d8",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: MoveDirection.none,
        outModes: { default: OutMode.out }
      },
      number: { value: 100 },
      size: { value: { min: 1, max: 3 } }
    }
  };

  // The template can now access this because it is public
  async particlesInit(engine: Engine): Promise<void> {
    if (this.isBrowser) {
      await loadFull(engine);
    }
  }
}
