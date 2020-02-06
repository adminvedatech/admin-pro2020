import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isActivate= false;

  constructor(private authService: AuthService,
              private router: Router) { 
 
    this.isActivate = this.authService.isLoggedIn();
   
    console.log('IS ACTIVATED ', this.isActivate);
    if(!this.isActivate) {
      console.log('GO TO LOGIN');
      
      this.router.navigate(['/login']);
    }
    
  } 

 
}

