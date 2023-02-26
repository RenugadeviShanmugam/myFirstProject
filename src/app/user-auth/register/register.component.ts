import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  dataobj: any;
  show = true;
  datavalue = '';
  name = 'viji';
  getdata(data: any) {}
  getformData(data: NgForm) {
    this.dataobj = data;
  }
  toggle() {
    this.show = !this.show;
  }
}
