import { Component, OnInit, Output } from '@angular/core';
import { TASKS } from 'src/app/data';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList;
  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

  pullAllTasks() {
    this.taskList = TASKS
  }

  showDetails(task: Task) {
    console.log('Details Clicked', task);
    this.selectedTask = this.selectedTask === task ? null : task;
    
  }
}
