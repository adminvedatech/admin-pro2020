import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css']
})
export class BankDetailComponent implements OnInit {

 @Input('nameOut') name: string= "Edilberto";

  constructor() { }

  ngOnInit() {

    console.log('NAME IN BANK DETAIL IS ', this.name);
    
  }

}
