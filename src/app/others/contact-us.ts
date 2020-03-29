import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { ValidationMessages } from '../validations/validation.messages';
import { COUNTRY_PHONE_CODE } from '../constants/country.phone.code';
import { PhoneValidator } from '../validations/form-validations/phone.validator';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  queryForm: FormGroup;
  feedbackForm: FormGroup;
  countryCodes = COUNTRY_PHONE_CODE;
  errorMessages = ValidationMessages.validationErrorMessages;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms() {
    let country = new FormControl(this.countryCodes[0], Validators.required);
    this.queryForm = this.fb.group({
      fullName: ['', Validators.compose([
        Validators.required, Validators.pattern('^[A-Za-z][ ]{4,}$')
      ])],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      countryPhone: new FormGroup({
        countryCode: country,
        phone: new FormControl('', {
          validators: Validators.compose([
            Validators.required,
            Validators.pattern('^[0-9]{6,}$')
          ])
        })
      })
    });

    this.feedbackForm = this.fb.group({
      fullName: ['', Validators.compose([
        Validators.required, Validators.pattern('^[A-Za-z]{5,}$')
      ])],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])]
    });
  }

  query(value) {
    console.log(value);
  }

  feedback(value) {

  }
}
