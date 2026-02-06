import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  // Add this line to define the currentYear property in your class
  currentYear: number = new Date().getFullYear(); 
}
