import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product, ProductUpload} from './product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient ) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/product-list').pipe(map((obj: any) => obj.products));

  }

  createProduct(product: ProductUpload) {
    this.httpClient.post<ProductUpload>("/products", product);
  }
}
