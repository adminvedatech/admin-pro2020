import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  @Output() onClickable = new EventEmitter<string>();
  message = 'Hello World';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('Clickable on Bank list');
    this.onClickable.emit(this.message);
    
  }

}
