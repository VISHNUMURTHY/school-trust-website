import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidationMessages, UsernameValidator } from '../validations/form-validations.ts/validations';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  queryForm: FormGroup;
  feedbackForm: FormGroup;
  errorMessages = ValidationMessages.validationErrorMessages;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms(){
    this.queryForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required, Validators.pattern('^[A-Za-z]{5,}$')
      ])],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      countryCode: [''],
      phone:['']
    });

    this.feedbackForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required, Validators.pattern('^[A-Za-z]{5,}$')
      ])],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])]
    });
  }

  query(value){
console.log(value);
  }

  feedback(value){

  }
}
