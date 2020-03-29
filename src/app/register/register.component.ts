import { Component, OnInit } from '@angular/core';
import { UsernameValidator } from '../validations/form-validations/username.validation';
import { ValidationMessages } from '../validations/validation.messages';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  usernameSuffix = false;
  newUser = true;
  hide = false;

  errorMessages = ValidationMessages.validationErrorMessages;
  passwordTooltip = 'Password must have minimum 8 characters length & contains Capital Letter, Small Letter, Number and Special Character [!@#$%&*]';

  constructor(private formBuilder: FormBuilder) {
    this.initializeForms();
  }

  ngOnInit(): void {
    this.registerForm.get('username').valueChanges.subscribe((value: any) => {
      value === '' ? this.usernameSuffix = false : isNaN(value) ? this.usernameSuffix = false : this.usernameSuffix = true;
    });
  }

  initializeForms() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required, UsernameValidator.validUsername
      ])],
      otp: ['', Validators.compose([
        Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(6), Validators.maxLength(6)
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*])[A-Za-z0-9!@#$%&*]{8,}$')
      ])]
    });
  }

  generateOtp() {
    this.newUser = false;
  }

  resendOtp() {

  }

  register(formValue) {

  }
}
