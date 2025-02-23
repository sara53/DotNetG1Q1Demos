import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybining',
  imports: [],
  templateUrl: './onewaybining.component.html',
  styleUrl: './onewaybining.component.css',
})
export class OnewaybiningComponent {
  trackName: string = 'PHP Track';
  flag: boolean = true;
  age: number = 25;
  imgSrc1: string = 'images/1.jpg';
  imgSrc2: string = '1.jpg';

  clickHandler() {
    this.trackName = 'Dotnet track';
    this.imgSrc1 = '2.jpg';
  }
}
