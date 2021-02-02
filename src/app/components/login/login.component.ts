import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validations: any;
  showPassword = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(regex)]],
      password: ['', [Validators.required, Validators.pattern(/[^\s]+/)]],
    });
    this.validations = {
      email: {
        requiredMessage: 'Ce champ ne doit pas être vide',
        invalidMailMessage: 'Entrez une adresse mail valide',

      },
      password: {
        requiredMessage: 'Ce champ ne doit pas être vide',
      },
    };
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  submit(): void {
    this.loading = true;
    this.authService.login(
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value
    ).then((response) => {
      this.loading = false;
      console.log(localStorage.getItem('access'));
      localStorage.setItem('token', response.key);
      this.authService.isAuthenticated = true;
      this.router.navigate(['/']);
    }).catch((err) => {
      this.loading = false;
    });
  }



}
