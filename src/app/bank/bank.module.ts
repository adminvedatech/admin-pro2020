import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankItemComponent } from './bank-list/bank-item/bank-item.component';
import { AddBankaccountComponent } from './add-bankaccount/add-bankaccount.component';

@NgModule({
  declarations: [BankComponent,BankDetailComponent,BankListComponent,BankItemComponent, AddBankaccountComponent],
  imports: [
    CommonModule,
   FormsModule,
    BankRoutingModule
  ]
})
export class BankModule { }
