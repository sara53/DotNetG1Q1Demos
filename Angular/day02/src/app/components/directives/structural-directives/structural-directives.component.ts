import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css',
})
export class StructuralDirectivesComponent {
  show: boolean = false;

  color: string = 'yellow';

  toggle() {
    this.show = !this.show;

    console.log(this.show);
  }

  // student: { name: string; age: number } | undefined;
  // constructor() {
  //   this.student = { name: 'ali', age: 25 };
  // }

  // itiTracks = [
  //   {
  //     id: 1,
  //     trackName: 'open Source',
  //   },
  //   {
  //     id: 2,
  //     trackName: 'Dotnet',
  //   },
  //   {
  //     id: 3,
  //     trackName: 'Front',
  //   },
  //   {
  //     id: 4,
  //     trackName: 'PHP',
  //   },
  //   {
  //     id: 5,
  //     trackName: 'OS',
  //   },
  // ];

  // names: string[] = [];
}
