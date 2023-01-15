import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!:Task;
  show:boolean= false;

  constructor( public servicio:TaskService) { }

  ngOnInit(): void {
  }

  showHide(){
    this.show = !this.show;
  }

  delete(tarea:Task){
    this.servicio.deleteTask(tarea)
  }

  
}
