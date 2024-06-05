import { Component, OnInit, inject } from '@angular/core';
import { ApiPagesService } from '../../../services/api-pages.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  protected servicioProductos: ApiPagesService = inject(ApiPagesService);
  protected productos: Product[] = [];
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.servicioProductos.getProducts().subscribe({
      next: (resp) => {
        this.productos = resp;
        //console.log(this.productos);
      },
      error: (err) => {
        //console.log(err);
      }
    });
  }

  navigate(id: number) {
    this.router.navigate(['/products', id]);
  }
}
