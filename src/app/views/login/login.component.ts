import { Toast } from '../../components/toast/models/toast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
Router;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  toastData: Toast = {
    title: 'Ups!',
    message: '',
    show: false,
    type: 'error',
  };
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

  get formControls() {
    return this.loginForm.controls;
  }

  buildFormDataLogin(): FormData {
    const formData = new FormData();
    formData.append('email', this.loginForm.get('email')?.value);
    formData.append('password', this.loginForm.get('password')?.value);
    return formData;
  }

  closeToast(value: boolean): void {
    this.toastData.show = value;
  }

  login(): void {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    const formData = this.buildFormDataLogin();
    this.user.login(formData).subscribe({
      next: (res) => {
        this.user.setUser(res);
        this.router.navigate(['']);
      },
      error: (err) => {
        this.toastData.message = err.error.error;
        this.toastData.show = true;
        this.toastData.type = 'error';
        this.loginForm.reset();

        setTimeout(() => {
          this.toastData.show = false;
        }, 2000);
      },
    });
  }
}
