import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecondsectionComponent } from './secondsection/secondsection.component';
import { Cta } from "../../components/cta/cta";


@Component({
  selector: 'app-home',
  standalone: true,
  // Add the BackgroundComponent to the imports array here:
  imports: [CommonModule, RouterModule, SecondsectionComponent, Cta], 
  templateUrl: './home.html', 
  styleUrls: ['./home.css']
})
export class Home {
   logos = [
    { src: "aws-svgrepo-com.svg", alt: "AWS", glowClass: "hover:drop-shadow-[0_0_20px_var(--glow-aws)]" },
    { src: "sysprologo.svg", alt: "SYSPRO", glowClass: "hover:drop-shadow-[0_0_20px_var(--glow-syspro)]" },
    { src: "google-6.svg", alt: "GOOGLE", glowClass: "hover:drop-shadow-[0_0_20px_var(--glow-white)]" },
    { src: "azure-logo.svg", alt: "AZURE", glowClass: "hover:drop-shadow-[0_0_20px_var(--glow-azure)]" },
    { src: "discord-wordmark.svg", alt: "DISCORD", glowClass: "hover:drop-shadow-[0_0_20px_var(--glow-discord)]" },
    { src: "meta.svg", alt: "META", glowClass: "hover:drop-shadow-[0_0_20px_var(--glow-meta)]" },
    { src: "github.svg", alt: "GITHUB", glowClass: "hover:drop-shadow-[0_0_20px_var(--glow-white)]" },
    { src: "google-logo.svg", alt: "GOOGLE_ALT", glowClass: "hover:drop-shadow-[0_0_20px_var(--glow-white)]" },
    { src: "rockson-logo.svg", alt: "ROCKSON", glowClass: "hover:drop-shadow-[0_0_20px_var(--glow-primary)]" },
    { src: "polkadot-logo.svg", alt: "POLKADOT", glowClass: "hover:drop-shadow-[0_0_20px_var(--glow-primary)]" }
  ];
}
