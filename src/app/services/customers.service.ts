import { Customer } from './../models/customer.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class CustomersService {
  url='http://localhost:3000/customers';

  constructor(private http: HttpClient){}

  getAll() :Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }

  get(id: number) :Observable<Customer>{
    return this.http.get<Customer>(this.url + "/" + id);
  }

  delete(id: number) :Observable<void>{
    return this.http.delete<void>(this.url + "/" + id);
  }

  save(customer: Customer) :Observable<Customer> {
    if(customer.id) {
        return this.http.put<Customer>(this.url + "/" + customer.id, customer);
    } else {
      return this.http.post<Customer>(this.url, customer);
    }
  }
}
