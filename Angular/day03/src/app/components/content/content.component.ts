import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  @Input() x: string = '';
  @Input() trackName: string = '';
  constructor() {
    console.log('1- Ctor');
  }
  ngOnInit(): void {
    console.log('Connection to database');
    console.log('Get Product Id');
  }
}
