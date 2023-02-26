import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'Welcome';
  enttxt: string = '';
  countertxt: number = 0;
  boolData = false;
  color = 'blue';
  font = '15px';

  getData(name: any) {
    alert(name);
  }
  gettxtData(name: string) {
    this.enttxt = name;
  }
  getNo(name: string) {
    name === 'plus' ? this.countertxt++ : this.countertxt--;
  }
  userArray = ['Anbu', 'Anjali', 'Anitha'];
  userList = [
    { name: 'Anbu', salary: 10000, location: 'Chennai' },
    { name: 'Anjali', salary: 20000, location: 'Coimbatore' },
    { name: 'Anitha', salary: 15000, location: 'Trichy' },
  ];
}
