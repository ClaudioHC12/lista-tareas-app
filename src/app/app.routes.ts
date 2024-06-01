import { Routes } from '@angular/router';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: ListaTareasComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
