import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Customer } from './model/customer.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  public getCustomerDetails(): Observable<Customer[]> {
    return this.http.get('./assets/files/customers.json').pipe(
      map((data: any) => {
        data.customers.data.forEach((d: any) => {
          // console.log(d);
        });
        return data.customers.data as Customer[];
      })
    );
  }
}
