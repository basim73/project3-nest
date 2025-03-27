import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
//create a constructor to inject the HttpClient
  constructor(private http:HttpClient) {}
  getproducts()
  {
    return this.http.get('https:fakestoreapi.com/products')}

   getProductsById(id: string)
   {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
