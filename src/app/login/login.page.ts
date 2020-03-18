import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup: FormGroup
  constructor(
   private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {}
}
