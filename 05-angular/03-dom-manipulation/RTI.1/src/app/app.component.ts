import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Task } from './models';
import { TASKS } from './data';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RTI';
  task: Task;
  taskList: Task[] = TASKS;
  selectedTask: Task;

  constructor() {}

  onSubmit(taskForm) {
    event.preventDefault();

    this.task = new Task(this.generateId(), taskForm.title, taskForm.description);
    this.taskList.push(this.task);
    taskForm.reset();
  }

  generateId() {
    return Math.floor(Math.random() * 1000)
  }

  onEdit(task: Task) {
    this.selectedTask = this.selectedTask === task ? null : task;
  }

  editTask(task: NgForm) {
    console.log('displaying', this.task)
  };
}
