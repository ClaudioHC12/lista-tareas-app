import { Routes } from '@angular/router';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { ContactComponent } from './components/pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lista-tareas', component: ListaTareasComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
