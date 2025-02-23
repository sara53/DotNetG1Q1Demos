import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css',
})
export class TwoWayBindingComponent {
  inputValue: string = '';

  // getInputValue(e: Event) {
  //   let target = e.target as HTMLInputElement;
  //   this.inputValue = target.value;
  // }
}
