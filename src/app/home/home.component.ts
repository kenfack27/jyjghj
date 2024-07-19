import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 nb:any;

ngOnInit(): void {
  nb:[1,2,3,4,5];
}
}
