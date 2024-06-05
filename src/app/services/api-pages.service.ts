import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiPagesService {

  private apiUrl: string = 'https://fakestoreapi.com';
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`);
  }
  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`);
  }

}
