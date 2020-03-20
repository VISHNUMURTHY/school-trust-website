import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {

  path: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.path = this.router.url;
  }

}
