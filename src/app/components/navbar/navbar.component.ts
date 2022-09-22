import { Router } from '@angular/router';
import { UserService } from './../../views/login/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() locationName!: string;
  userLogged: boolean = false;
  username!: string;
  constructor(
    private cookie: CookieService,
    private user: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser(): void {
    this.userLogged = this.cookie.check('user');
    if (this.userLogged) {
      const {
        user: { username },
      } = JSON.parse(this.cookie.get('user'));
      this.username = username;
    }
  }

  logout(): void {
    this.user.logout().subscribe({
      next: (res) => {
        console.log(res);
        this.cookie.delete('user');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
