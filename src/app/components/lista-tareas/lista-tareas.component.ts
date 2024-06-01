import { Component, OnInit, inject } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit {

  protected listaTareas: string[] = [];
  protected nuevaTarea: string = '';
  private tareasService: TareasService = inject(TareasService);

  constructor() { }
  ngOnInit(): void {
    this.listaTareas = this.tareasService.getTareas();
  }

  eliminarTarea(index:number){
    this.tareasService.deleteTarea(index);
    this.listaTareas = this.tareasService.getTareas();
  }
  agregarTarea(){
    this.tareasService.addTarea(this.nuevaTarea);
    this.listaTareas = this.tareasService.getTareas();
    this.nuevaTarea = '';
  }

}
