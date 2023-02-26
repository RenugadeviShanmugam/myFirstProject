import { Component } from '@angular/core';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularapp';
  data = 'Angular';
  customers: any;
  constructor(private service: CustomerService) {
    this.service.getData().subscribe((data) => {
      this.customers = data;
    });
  }
  postData(data: any) {
    this.service.postData(data).subscribe((result) => {
      console.log(result);
    });
  }
}
