import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDto } from '../model/Model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpClient: HttpClient) {
  }

  public getCustomers(): Observable<CustomerDto[]> {
    return this.httpClient.get<CustomerDto[]>('http://localhost:8080/api/customer/get/');
  }
}
