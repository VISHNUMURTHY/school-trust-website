import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as _moment from 'moment';
import { default as _rollupMoment__default } from 'moment';
import { ValidationMessages } from '../validations/validation.messages';
import { GENDER_TYPES, SALUTATION_TYPES } from '../constants/app.constants';
import { STATES } from '../constants/states.constants';
import { CommonService } from '../service/common.service';
import { DATE_DD_MMM_YYYY_FORMAT } from '../common/date-formats/date.format';
 
const moment = _rollupMoment__default || _moment;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_DD_MMM_YYYY_FORMAT },
  ]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  errorMessages = ValidationMessages.validationErrorMessages;
  genderTypes = GENDER_TYPES;
  salutationTypes = SALUTATION_TYPES;
  states = STATES;
  addAddress = new FormControl(false);
  image = "../../assets/img/profile.svg";
  addressInfo = "Select this option to add your address details."
  handSet = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private fb: FormBuilder, private breakpointObserver: BreakpointObserver, private commonService: CommonService) { }

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

  onFileChange($event) {
    if ($event.target.files[0] && $event.target.files && $event.target.files[0].tyle !== null) {
      let file = $event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        let result = event.target.result as string;
        this.commonService.imageUpload(result);
        this.image = result;
      }
    }
  }

  updateProfile(profileForm: any) {
    console.log(profileForm);
  }
}