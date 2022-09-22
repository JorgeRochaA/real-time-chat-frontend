import { CanActivate, Router, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
  constructor(private router: Router, private cookie: CookieService) {}

  redirect(flag: boolean): void {
    if (flag) {
      this.router.navigate(['']);
    }
  }
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userExist = this.cookie.check('user');
    this.redirect(userExist);
    return !userExist;
  }
}
