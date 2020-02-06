import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isActivate: boolean = true;

  constructor(private authService: AuthService) { 

    if (this.authService.isLoggedIn()) {
      console.log('IS LOGGED');
      this.isActivate = true;
      // this.router.navigate(['/customer']);
    } else {
      console.log('NO LOGGED');
      
      this.isActivate = false;
    }
  }

  ngOnInit() {
  }

}
