import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../login/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  emailError: boolean = false;
  registerForm: FormGroup;
  submitted: boolean = false;
  usernameError: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private user: UserService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: this.mustMatch('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {}

  get formControls() {
    return this.registerForm.controls;
  }

  buildFormData(): FormData {
    const formData = new FormData();
    formData.append('username', this.registerForm.get('username')?.value);
    formData.append('email', this.registerForm.get('email')?.value);
    formData.append('password', this.registerForm.get('password')?.value);
    formData.append('username_color', this.colorHEX());
    return formData;
  }

  colorHEX(): string {
    let color = '';
    for (let i = 0; i < 6; i++) {
      color = color + this.generateLetter();
    }
    return '#' + color;
  }

  focus(input: string): void {
    if (input === 'email') {
      this.emailError = false;
    }
    if (input === 'username') {
      this.usernameError = false;
    }
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

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];
      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.mustMatch
      ) {
        return;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mustMatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  signUp(): void {
    this.submitted = true;

    if (!this.registerForm.valid) {
      return;
    }
    this.user.signUp(this.buildFormData()).subscribe({
      next: (res) => {
        this.user.setUser(res);
        this.registerForm.reset();
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
        const { email, username } = err.error.errors;
        if (email) {
          this.emailError = true;
        }
        if (username) {
          this.usernameError = true;
        }
      },
    });
  }
}
