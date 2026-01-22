import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './background/background';
import { NavbarComponent } from './components/navbar/navbar.component';
// Note: routes and provideRouter setup are usually in a separate config file

@Component({
  selector: 'app-root',
  standalone: true,
  // Add all standalone components used in app.html here
  imports: [RouterModule, RouterOutlet, BackgroundComponent, NavbarComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
