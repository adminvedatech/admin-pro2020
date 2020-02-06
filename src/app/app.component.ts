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
  isActivate= true;

  constructor(private authService: AuthService,
              private router: Router) { 


  if (this.authService.isLoggedIn()) {
    console.log('IS LOGGED');
    this.isActivate = true;
    
  } else {
    console.log('NO LOGGED');
    
    this.isActivate = false;
    this.router.navigate(['/login']);
  }
}

}

