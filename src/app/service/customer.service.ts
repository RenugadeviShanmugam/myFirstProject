import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('http://localhost:3002/api/customer');
  }
  postData(data: any) {
    return this.http.post('http://localhost:3002/api/customer', data);
  }
}
