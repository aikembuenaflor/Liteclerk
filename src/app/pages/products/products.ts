import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Import the router tool

@Component({
  selector: 'app-products',
  standalone: true, // Ensure this is here for modern Angular
  imports: [RouterLink], // 2. Register it so the button recognizes 'routerLink'
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  // Logic goes here
}
