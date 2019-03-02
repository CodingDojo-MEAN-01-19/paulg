import { Component } from '@angular/core';

import { Task } from './models';
import { TASKS } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RTI';
  taskList;
  selectedTask: Task;

  constructor() {}

  pullAllTasks() {
    this.taskList = TASKS;
  }

  showDetails(task: Task) {
    this.selectedTask = this.selectedTask === task ? null : task;
  }
}
