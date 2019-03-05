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
export class AppComponent implements OnInit {
  title = 'RTI';
  task: Task;
  taskList: Task[]
  selectedTask: Task;

  constructor() {}

  ngOnInit() {
    this.taskList = TASKS;
  }

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
