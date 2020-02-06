import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankComponent } from './bank.component';
import { AddBankaccountComponent } from './add-bankaccount/add-bankaccount.component';


const routes: Routes = [
  {
    path: '',
    component: BankComponent
  },
  {
    path: 'add-bankaccount',
    component: AddBankaccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
