import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage, SessionStorage, SERVER_API_URL } from '../../constants/app.constants';
import { LoginUser } from 'src/app/model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userCredentials: LoginUser){
    this.http.get(SERVER_API_URL+'api').subscribe(res => console.log(res));
    this.http.post(SERVER_API_URL+'api', userCredentials).subscribe(res => console.log(res), err => console.log(err));
  }
}
