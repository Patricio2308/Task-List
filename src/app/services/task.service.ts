import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];    

  constructor() {
    this.tasks = [
      {
        title: "Crear Front",
        descripcion: "Diseño y estilos"
      },
      {
        title: "Crear Back",
        descripcion: "Diseñar  y programar API"
      },
      {
        title: "Crear Base de Datos",
        descripcion: "Diseñar UML y tablas"
      }
    ];
   }

   getTasks(){
    return this.tasks;
   }

   addTask(task: Task){
    this.tasks.push(task);
   }
}
