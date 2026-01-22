import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-secondsection', // Renamed selector to match app-home-secondsection in HTML
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondsection.component.html',
  styleUrls: ['./secondsection.component.css']
})
export class SecondsectionComponent implements AfterViewInit {
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private el: ElementRef // Inject ElementRef to safely access the component's host element
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    // Only run this code if we are in a web browser environment
    if (this.isBrowser) {
      // Use ElementRef to find elements safely within THIS component only
      const cardA = this.el.nativeElement.querySelector('.card-a-wrapper');
      const cardB = this.el.nativeElement.querySelector('.card-b-wrapper');

      if (cardA) this.initSlider(cardA, 2000);
      if (cardB) this.initSlider(cardB, 2000);
    }
  }

  // Function to handle the image sliding logic using pure JS/TS
  private initSlider(cardSelector: HTMLElement, interval: number): void {
    const slides = cardSelector.querySelectorAll('.slider-img');
    if (slides.length === 0) return;
    
    let current = 0;
    setInterval(() => {
      // Hide the current slide
      slides[current].classList.remove('opacity-100', 'scale-100');
      slides[current].classList.add('opacity-0', 'scale-105');
      
      // Move to the next slide
      current = (current + 1) % slides.length;
      
      // Show the next slide
      slides[current].classList.remove('opacity-0', 'scale-105');
      slides[current].classList.add('opacity-100', 'scale-100');
    }, interval);
  }
}
