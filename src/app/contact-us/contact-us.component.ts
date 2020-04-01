import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { ValidationMessages } from '../validations/validation.messages';

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

  initializeForms() {
    this.queryForm = this.fb.group({
      fullname: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z]+\\s)*[A-Za-z]+$')
      ])],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]$')
      ])],
      category: ['', Validators.required],
      details: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.feedbackForm = this.fb.group({
      fullname: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z]+\\s)*[A-Za-z]+$')
      ])],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{6,}$')
      ])],
      details: ['', Validators.compose([
        Validators.required
      ])],
    });
  }

  query(value) {
    console.log(value);
  }

  feedback(value) {
    console.log(value);
  }
}
