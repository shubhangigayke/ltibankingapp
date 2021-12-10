import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model'

const baseUrl = 'http://localhost:8771';
const baseUrlConsumer = 'http://localhost:8763';
@Injectable({
  providedIn: 'root'
})
export class CustserviceService {

  constructor(private http: HttpClient) { }
  
  
  getCustomer(id: number): Observable<any> {
    return this.http.get(`${baseUrlConsumer+'/getCustomerById'}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${baseUrl+'/addCustomer'}`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${baseUrl+'/deleteCustomerById'}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${baseUrlConsumer}`+'/getAllCustomers');
  }

}
