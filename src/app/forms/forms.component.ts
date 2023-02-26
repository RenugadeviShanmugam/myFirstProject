import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  message: any = '';
  ngOnInit(): void {
    //console.log(this.route.snapshot.paramMap.get('id'));
    this.message = this.route.snapshot.paramMap.get('id');
  }
}
