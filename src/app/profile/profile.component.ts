import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationMessages } from '../validations/validation.messages';
import { GENDER_TYPES, SALUTATION_TYPES } from '../constants/app.constants';
import { STATES } from '../constants/states.constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  errorMessages = ValidationMessages.validationErrorMessages;
  genderTypes = GENDER_TYPES;
  salutationTypes = SALUTATION_TYPES;
  states = STATES;
  addAddress = new FormControl(false);
  image = new FormControl("");
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForms();

    this.addAddress.valueChanges.subscribe((value: boolean) => {
      this.modifyAddressForm(value);
    })
  }

  initializeForms() {
    let personalData = this.fb.group({
      salutation: ['', Validators.required],
      fullname: ['', Validators.compose([
        Validators.required, Validators.pattern('^([A-Za-z]+\\s)*[A-Za-z]+$')
      ])],
      dob: ['', Validators.required],
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
      pancard: ['', Validators.compose([Validators.required, Validators.pattern('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')])]
    });

    this.profileForm = this.fb.group({
      personalDataForm: personalData
    });
  }

  modifyAddressForm(val: boolean) {

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

    val ? this.profileForm.addControl('addressDataForm', addressData) : this.profileForm.removeControl('addressDataForm');
  }

  onFileChange($event){
    console.log("File upload");
  }
}
