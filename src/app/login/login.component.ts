import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private f: FormBuilder,
              private authservice: AuthService) { }

  ngOnInit() {

    this.form = this.f.group({
      username: new FormControl[''],
      password: new FormControl['']

    })
  }

  onSubmit() {
    console.log('VALUE FORM', this.form.value);
    
    this.authservice.login(this.form.value).subscribe( res=> {
      console.log('res');
      
    });
  
  }

}
