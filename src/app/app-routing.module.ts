import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'bank',
  // component: BanksComponent
  loadChildren: () => import('./bank/bank.module').then(m => m.BankModule),
   canActivate: [AuthGuard] 
  },
  { path: 'login',
  component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
