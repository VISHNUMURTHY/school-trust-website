import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationMessages } from '../validations/validation.messages';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  step = 0;
  donorForm: FormGroup;
  errorMessages = ValidationMessages.validationErrorMessages;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms() {
    let personalData = this.fb.group({
      salutation: ['', Validators.required],
      fullname: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z]+\\s)*[A-Za-z]+$')
      ])],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      mobile: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{6,}$')
      ])]
    });

    let addressData = this.fb.group({

    });

    let paymentData = this.fb.group({

    });

    this.donorForm = this.fb.group({
      personalDataForm : personalData,
      addressDataForm : addressData,
      paymentDataForm : paymentData
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  donate(value) {

  }
}
