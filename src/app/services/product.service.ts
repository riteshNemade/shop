import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Products } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts() : Observable<Products>{
    console.log(this.http.get<Products>('https://dummyjson.com/products'))
    return this.http.get<Products>('https://dummyjson.com/products');
  }
  
  getProductsByCategory(category: string): Observable<Products>{
    return this.http.get<Products>('https://dummyjson.com/products/category/'+ category);
  }
}
