import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as URLS from '../../app/commons/url_backend';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  isAuthenticated: boolean;
  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticated =
      localStorage.getItem('token') !== undefined &&
      localStorage.getItem('token') !== null;
  }

  login(formData: FormData): Observable<any> {
    return this.http.post<any>(URLS.LOGIN_URL, formData);
  }

  signUp(formData: FormData): Observable<any> {
    return this.http.post<any>(URLS.SIGNUP_URL, formData);
  }

  getUser(): Observable<any> {
    return this.http.get<any>(URLS.GET_USER_URL);
  }

  setUser(
    firstname: string,
    lastname: string,
    mail: string,
    dateNaissance: string,
    role: string,
    id?: string
  ): void {
    this.user = new User(firstname, lastname, mail, dateNaissance, role, id);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
