/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    rememberMe: new FormControl(false)
  });

}
