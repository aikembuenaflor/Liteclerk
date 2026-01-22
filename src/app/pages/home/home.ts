import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecondsectionComponent } from './secondsection/secondsection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // Add the BackgroundComponent to the imports array here:
  imports: [CommonModule,  RouterModule, SecondsectionComponent], 
  templateUrl: './home.html', 
  styleUrls: ['./home.css']
})
export class Home {}
