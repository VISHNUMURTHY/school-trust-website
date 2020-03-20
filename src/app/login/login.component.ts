import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsernameValidator, ValidationMessages } from '../register-login/form-validations.ts/validations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild("userFocus") userFocus: ElementRef;

  loginFlag = true;
  forgotFlag = false;
  hide = false;
  usernameSuffix = false;
  loginForm: any;
  forgotForm: any;

  errorMessages = ValidationMessages.validationErrorMessages;
  passwordTooltip = 'Password must have minimum 8 characters length & contains Capital Letter, Small Letter, Number and Special Character [!@#$%&*]';

  constructor(private formBuilder: FormBuilder) {
    this.initializeForms();
  }

  ngOnInit(): void {
    this.loginForm.get('username').valueChanges.subscribe((value: any) => {
      value === '' ? this.usernameSuffix = false : isNaN(value) ? this.usernameSuffix = false : this.usernameSuffix = true;
    });

    this.forgotForm.get('username').valueChanges.subscribe((value: any) => {
      value === '' ? this.usernameSuffix = false : isNaN(value) ? this.usernameSuffix = false : this.usernameSuffix = true;
    });
  }

  initializeForms() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required, UsernameValidator.validUsername
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*])[A-Za-z0-9!@#$%&*]{8,}$')
      ])]
    });

    this.forgotForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required, UsernameValidator.validUsername
      ])],
      otp: ['', Validators.compose([
        Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(6)
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*])[A-Za-z0-9!@#$%&*]{8,}$')
      ])]
    });
  }

  forgotPassword() {
    if (this.loginForm.get('username').hasError('required') || this.loginForm.get('username').hasError('validUsernameEmail') || this.loginForm.get('username').hasError('validUsernameMobile')) {
      this.forgotFlag = false;
      this.userFocus.nativeElement.focus();
    } else {
      this.forgotFlag = true;
      this.hide = false;
      this.forgotForm.controls['username'].setValue(this.loginForm.get('username').value);
      this.forgotForm.controls['username'].disable();
      this.sendOtp()
    }
  }

  edit() {
    this.forgotFlag = false;
    this.loginForm.controls['password'].reset();
  }

  sendOtp(){

  }

  login(formValue: FormBuilder){

  }

  resetPassword(formValue){

  }
}
