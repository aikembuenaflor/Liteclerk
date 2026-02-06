import { 
  Component, 
  OnInit, 
  OnDestroy, 
  Inject, 
  PLATFORM_ID, 
  ChangeDetectorRef // Required for manual UI updates
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-secondsection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondsection.component.html',
  styleUrls: ['./secondsection.component.css']
})
export class SecondsectionComponent implements OnInit, OnDestroy {
  imagesA: string[] = [
    '/Images/demo-store-1.png', '/Images/demo-store-2.png', '/Images/demo-store-3.png',
    '/Images/demo-store-4.png', '/Images/demo-store-5.png', '/Images/demo-store-6.png',
    '/Images/demo-store-7.png', '/Images/demo-store-8.png', '/Images/demo-store-9.png',
    '/Images/demo-store-10.png'
  ];

  imagesB: string[] = [
    '/Images/demo-store-11.png', '/Images/demo-store-12.png', '/Images/demo-store-13.png',
    '/Images/demo-store-14.png', '/Images/demo-store-15.png', '/Images/demo-store-16.png',
    '/Images/demo-store-17.png', '/Images/demo-store-18.png', '/Images/demo-store-19.png',
    '/Images/demo-store-20.png'
  ];

  currentIndexA = 0;
  currentIndexB = 0;
  private timerA: any;
  private timerB: any;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef // Inject Change Detection
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startSliders();
    }
  }

  startSliders(): void {
    // Timer for Slider A
    this.timerA = setInterval(() => {
      this.currentIndexA = (this.currentIndexA + 1) % this.imagesA.length;
      this.cdr.detectChanges(); // Force update view
    }, 1500);

    // Timer for Slider B
    this.timerB = setInterval(() => {
      this.currentIndexB = (this.currentIndexB + 1) % this.imagesB.length;
      this.cdr.detectChanges(); // Force update view
    }, 2000);
  }

  ngOnDestroy(): void {
    // Clear timers to prevent memory leaks
    if (this.timerA) clearInterval(this.timerA);
    if (this.timerB) clearInterval(this.timerB);
  }
}
