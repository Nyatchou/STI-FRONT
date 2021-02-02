
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as URLS from '../../app/commons/url_backend';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  isAuthenticated: boolean;
  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticated = localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null;
  }

  async login(userName: string, passWord: string): Promise<any> {
    const response = await this.http
      .post<any>(URLS.LOGIN_URL, {
        login_text: userName,
        password: passWord,
      })
      .toPromise();
    return response;
  }

  async signUp(
    firstname: string,
    lastname: string,
    mail: string,
    dateNaissance: string,
    role: string,
    password: string
  ): Promise<any> {
    const response = await this.http
      .post<any>(URLS.SIGNUP_URL, {
        email: mail,
        password1: password,
        password2: password,
        first_name: firstname,
        last_name: lastname,
        date_naissance: dateNaissance,
        role: role
      })
      .toPromise();
    return response;
  }
  setUser(
    firstname: string,
    lastname: string,
    mail: string,
    dateNaissance: string,
    role: string,
  ): void {
    this.user = new User(firstname, lastname, mail,  dateNaissance, role);
  }

  logout(): void{
    localStorage.removeItem('token');
  }

}
