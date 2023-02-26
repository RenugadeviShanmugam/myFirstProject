import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css'],
})
export class ReactformComponent {
  register = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(5)),
    email: new FormControl('', Validators.email),
  });
  getData() {
    console.log(this.register.value);
  }
  get vname() {
    return this.register.get('name');
  }
  get vpassword() {
    return this.register.get('password');
  }
  get vemail() {
    return this.register.get('email');
  }
}
