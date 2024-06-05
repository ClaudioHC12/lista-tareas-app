import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPagesService } from '../../../services/api-pages.service';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  private routeActive: ActivatedRoute = inject(ActivatedRoute);
  loading: boolean = true;
  protected servicioProductos: ApiPagesService = inject(ApiPagesService);
  protected producto?: Product;

  ngOnInit(): void {
    this.routeActive.params.subscribe(params => {
      this.servicioProductos.getProductById(parseInt(params['id'])).subscribe({
        next: (resp) => {
          this.producto = resp;
          //console.log(this.producto);
          this.loading = false;
        },
        error: (err) => {
          //console.log(err);
          this.loading = false;
        }
      })
    });
  }
}
