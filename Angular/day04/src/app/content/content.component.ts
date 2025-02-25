import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log('After Content Init');
  }
}
