import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  constructor(private authService: AuthServiceService,
              private router: Router) {}

  userSubmitted = false;
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onLogin() {
    this.userSubmitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }

    const token = this.authService.authUser(this.loginForm.value);
    if(token) {
      localStorage.setItem('token', token.userName)
      console.log('Login Successful')
      this.router.navigate(['/']);
    }
    else {
      console.log('Login Failed')
    }
  }
}
