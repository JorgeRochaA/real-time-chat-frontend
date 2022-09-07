import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserResponse } from './models/user';
import { UserService } from './services/user.service';
Router;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private user: UserService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  ngOnInit(): void {}

  get formsControl() {
    return this.loginForm.controls;
  }

  buildFormDataLogin(): FormData {
    const formData = new FormData();
    formData.append('email', this.loginForm.get('email')?.value);
    formData.append('password', this.loginForm.get('password')?.value);
    return formData;
  }

  buildFormDataSignUp(): void {}

  colorHEX(): string {
    let color = '';
    for (let i = 0; i < 6; i++) {
      color = color + this.generateLetter();
    }
    return '#' + color;
  }
  generateLetter(): string {
    let letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ];
    let number = parseInt((Math.random() * 15).toFixed(0));
    return letters[number];
  }

  login(): void {
    if (!this.loginForm.valid) {
      return;
    }
    const formData = this.buildFormDataLogin();
    this.user.login(formData).subscribe({
      next: (res) => {
        this.setUser(res);
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  setUser(user: UserResponse): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
  signUp(): void {}
}
