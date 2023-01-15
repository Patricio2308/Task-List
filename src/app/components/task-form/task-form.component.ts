import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor( public taskServicio:TaskService ) { }

  ngOnInit(): void {
  }
  addTask(title: any, description:any){
    console.log(`Se agrega: ${title.value}` , description.value);
    this.taskServicio.addTask(
      {
        title: title.value,
        descripcion: description.value
      }
    )
    title.value = "";
    description.value = "";
    title.focus();
    return false
  }
}
