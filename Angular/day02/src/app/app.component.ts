import { Component } from '@angular/core';
import { OnewaybiningComponent } from './components/onewaybinding/onewaybining.component';
import { TwoWayBindingComponent } from './components/twowaybinding/two-way-binding.component';
import { LoginComponent } from './components/login/login.component';
import { StructuralDirectivesComponent } from './components/directives/structural-directives/structural-directives.component';
import { TodosComponent } from './components/todos/todos.component';

@Component({
  selector: 'app-root',
  imports: [
    OnewaybiningComponent,
    TwoWayBindingComponent,
    LoginComponent,
    StructuralDirectivesComponent,
    TodosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day02';
}
