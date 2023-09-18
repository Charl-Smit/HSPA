import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder, ValidationErrors } from '@angular/forms'
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({})
  constructor(private fb: FormBuilder, private userService: UserServiceService) {}

  user: any = {};

  ngOnInit() {
    this.createRegistrationForm();
    this.registrationForm.controls['userName'].setValue('Default Value');
  }

  onSubmit() {
    console.log(this.registrationForm)
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.userService.addUser(this.user);
    this.registrationForm.reset();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
    }, {validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: AbstractControl): ValidationErrors | null {
    const passwordControl = fg.get('password');
    const confirmPasswordControl = fg.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      return passwordControl.value === confirmPasswordControl.value ? null : {notmatched: true};
    }

    return null;
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

}
