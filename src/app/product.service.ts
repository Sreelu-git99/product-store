import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base_url = "https://sheltered-springs-67444.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getProducts()
  {
    return this.http.get(this.base_url + 'product');
  }

  getProductDetails(id)
  {
    return this.http.get(this.base_url + 'product/' + id);
  }

  submitForm(productInfo)
  {
    return this.http.post<any>(this.base_url + 'product/', productInfo);
  
  }

  deleteProduct(id): Observable<void>
  {
    return this.http.delete<void>(this.base_url + 'product/' + id);
  }
  
}
