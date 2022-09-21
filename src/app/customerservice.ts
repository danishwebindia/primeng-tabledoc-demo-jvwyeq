import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomersLarge() {
    return this.http
      .get<any>('assets/customers-large.json')
      .toPromise()
      .then((res) => <Customer[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getInHaltData(customer) {
    return (
      this.http
        //  .get<any>(`assets/inHalt-data.json/${customer.id}/${customer.isInHalt}`)
        .get<any>(`assets/inHalt-data.json`)
        .toPromise()
        .then((res) => <Customer[]>res.data)
        .then((data) => {
          return data;
        })
    );
  }
}
