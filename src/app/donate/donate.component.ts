import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationMessages } from '../validations/validation.messages';
import { GENDER_TYPES, SALUTATION_TYPES } from '../constants/app.constants';
import { STATES } from '../constants/states.constants';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  step = 0;
  checked = new FormControl(true);
  docCopy = new FormControl(false);
  disableAddressPanel = true;
  disablePaymentPanel = true;
  donorForm: FormGroup;
  errorMessages = ValidationMessages.validationErrorMessages;
  genderTypes = GENDER_TYPES;
  salutationTypes = SALUTATION_TYPES;
  states = STATES;
  hardCopyInfo = 'Select this option to recieve Hard copy for donation amount.';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForms();

    this.checked.valueChanges.subscribe((value: boolean) => {
      if (value === true) {
        this.donorForm.get('personalDataForm').get('pancard').setValidators([Validators.required, Validators.pattern('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')]);
      } else {
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
        Validators.pattern('^[0-9]{10}$')
      ])],
      gender: ['', Validators.compose([
        Validators.required
      ])],
      pancard: ['']
    });

    let addressData = this.fb.group({
      addressDetails: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z0-9#/,-]+\\s)*[A-Za-z0-9#/,-]+$')
      ])],
      landMark: [''],
      locality: ['', Validators.compose([
        Validators.required
      ])],
      city: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z]+\\s)*[A-Za-z]+$')
      ])],
      district: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z]+\\s)*[A-Za-z]+$')
      ])],
      state: ['', Validators.compose([
        Validators.required, Validators.pattern('^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$')
      ])],
      pincode: ['', Validators.compose([
        Validators.required, Validators.pattern('^[0-9]{6}$')
      ])]
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
      hardCopy: [this.docCopy.value]
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
