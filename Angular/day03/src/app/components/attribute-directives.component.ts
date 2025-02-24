import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css',
})
export class AttributeDirectivesComponent {
  show: boolean = false;
  color: string = 'red';

  toggle(): void {
    this.show = !this.show;
  }
}
