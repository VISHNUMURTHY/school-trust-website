import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationMessages } from '../validations/validation.messages';
import { GENDER_TYPES, SALUTATION_TYPES } from '../constants/app.constants';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  step = 1;
  checked = new FormControl(true);
  disableAddressPanel = true;
  disablePaymentPanel = true;
  donorForm: FormGroup;
  errorMessages = ValidationMessages.validationErrorMessages;
  genderTypes = GENDER_TYPES;
  salutationTypes = SALUTATION_TYPES;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForms();

    this.checked.valueChanges.subscribe((value: boolean) => {
      if (value === true) {
        this.donorForm.get('personalDataForm').get('pancard').setValidators([Validators.required, Validators.pattern('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')]);
      }else{
        this.donorForm.get('personalDataForm').get('pancard').clearValidators();
      }
      this.donorForm.get('personalDataForm').get('pancard').updateValueAndValidity();
    });
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
        Validators.pattern('^[0-9]+$')
      ])],
      gender: ['', Validators.compose([
        Validators.required
      ])],
      pancard: ['']
    });

    let address = this.fb.group({
      addressDetails: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z0-9#/,-]+\\s)*[A-Za-z0-9#/,-]+$')
      ])],
      landMark: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z0-9,]+\\s)*[A-Za-z0-9,]+$')
      ])],
      city: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z]+\\s)*[A-Za-z]+$')
      ])],
      district: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z]+\\s)*[A-Za-z]+$')
      ])],
      state: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z]+\\s)*[A-Za-z]+$')
      ])],
      nation: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z]+\\s)*[A-Za-z]+$')
      ])],
      pincode:['', Validators.compose([
        Validators.required, Validators.pattern('^[0-9]+$')
      ])]
    });

    let addressData = this.fb.group({
      residenceAddressForm: address,
      permanentAddressForm: address
    });

    let paymentData = this.fb.group({
      paymentType: ['', Validators.compose([
        Validators.required, Validators.pattern('^[A-Z]+$')
      ])],
      amount: ['', Validators.compose([
        Validators.required, Validators.pattern('^[0-9]+$')
      ])]
    });

    this.donorForm = this.fb.group({
      personalDataForm: personalData,
      addressDataForm: addressData,
      paymentDataForm: paymentData,
      hardCopy: ['', Validators.compose([
        Validators.required
      ])]
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
