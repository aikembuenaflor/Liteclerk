import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  /* Added RouterLink and RouterLinkActive to imports */
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive], 
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
