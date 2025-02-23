import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  currentTask: string = '';
  tasksList: string[] = [];

  addTask() {
    this.tasksList.push(this.currentTask);
    this.currentTask = '';
  }
  removeTask(taskIndex: any) {
    this.tasksList = this.tasksList.filter((task, index) => index != taskIndex);
  }
}
