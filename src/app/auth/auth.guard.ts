import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

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
    let user: boolean = !!localStorage.getItem('user');
    this.redirect(user);
    return user;
  }
}
