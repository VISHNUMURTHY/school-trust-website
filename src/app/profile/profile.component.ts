import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms(){
    this.profileForm = this.fb.group({
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
    })
  }
}
