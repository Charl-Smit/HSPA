import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  constructor() {}

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
  }
}
