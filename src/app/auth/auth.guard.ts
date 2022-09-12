import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookie: CookieService) {}

  redirect(flag: boolean): void {
    if (!flag) {
      this.router.navigate(['/login']);
    }
  }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userExist = this.cookie.check('user');
    this.redirect(userExist);
    return userExist;
  }
}
