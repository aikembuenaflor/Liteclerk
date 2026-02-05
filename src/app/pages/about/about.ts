import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('About Us Component Initialized');
  }

  onDemoClick(): void {
    alert('Demo scheduling initialized!');
    // Implement [LiteClerk Booking Logic](https://www.liteclerk.com) here.
  }
}
