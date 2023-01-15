import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tareas:Task[] = [];

  constructor(
    public taskServicios: TaskService
  ) { }

  ngOnInit(): void {
    this.tareas = this.taskServicios.getTasks();
  }
  
  
}
