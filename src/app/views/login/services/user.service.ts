import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  login(data: FormData): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${environment.apiURL}/login`, data);
  }
  signUp(data: FormData): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${environment.apiURL}/register`, data);
  }

  setUser(user: UserResponse): void {
    this.cookie.set('user', JSON.stringify(user), 1);
  }
}
