import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EMAIL_PATTERN, PHONE_PATTERN} from '../validations/validation.messages';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  generateOtp(username: string){
    if(username.match(EMAIL_PATTERN)){
      
    }
  }

  imageUpload(){

  }

  imageRetrieve(){

  }
}
