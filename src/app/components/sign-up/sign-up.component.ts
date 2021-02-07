
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {
  MIN_LENGTH_PASSWORD,
} from '../../commons/constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  signupForm: FormGroup;
  validations: any;
  showpassword = false;
  loading = false;

  ngOnInit(): void {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.;:,])(?=\\S)[\\S]{${MIN_LENGTH_PASSWORD},}$`;

    this.signupForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.pattern(regex)]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(MIN_LENGTH_PASSWORD),
          Validators.pattern(passwordRegex),
        ],
      ],
      role: ['', [Validators.required]],
      dateNaissance: [null],
    });

    this.validations = {

      email: {
        requiredMessage: 'Ce champ ne doit pas être vide',
        invalidMailMessage: 'Entrez une adresse mail valide',
      },
      firstname: {
        requiredMessage: 'Ce champ ne doit pas être vide',
      },
      lastname: {
        requiredMessage: 'Ce champ ne doit pas être vide',
      },
      password: {
        requiredMessage: 'Ce champ ne doit pas être vide',
        minLengthMessage: `Le mot de passe doit contenir au moins ${MIN_LENGTH_PASSWORD} caractères`,
        patternMessage: `Le mot de passe doit contenir uniquement: lettre(s) majuscule(s), lettre(s) minuscule(s), chiffre(s) et caractère(s) spécial(aux)`,
      },
      role: {
        requiredMessage: 'Vous devez choisir un sexe',
      },
      // dateNaissance: {
      //   required: this.signupForm.get('dateNaissance').hasError('required'),
      //   requiredMessage: 'Vous devez sélectionner votre date de naissance',
      // },
    };
  }

  handleDateOpenChange(open: boolean): void {
    if (this.signupForm.get('dateNaissance').value) {
      console.log(this.signupForm.get('date').value.toLocaleDateString());
    }
  }

  togglePasswordVisibility(): void {
    this.showpassword = !this.showpassword;
  }
  // passwordValidator(control: AbstractControl): {[key: string]: boolean} | null {
  //   const passRegex = '#^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{10,}$#';
  // }
  submit(): void {
    this.loading = true;
    const formData = new FormData();

    const firstname = this.signupForm.controls.firstname.value;
    const lastname = this.signupForm.controls.lastname.value;
    const email = this.signupForm.controls.email.value;
    const password = this.signupForm.controls.password.value;
    const role = this.signupForm.controls.role.value;
    const dateNaissance = this.signupForm.controls.dateNaissance.value;

    formData.append('first_name', firstname);
    formData.append('last_name', lastname);
    formData.append('email', email);
    formData.append('password1', password);
    formData.append('password2', password);
    formData.append('role', role);
    this.authService
      .signUp(formData)
      .subscribe((res) => {
        console.log(res);
        this.loading = false;
        this.authService.getUser().subscribe((data) => {
          this.authService.setUser(data.first_name, data.last_name, data.email, data.date_of_birth, data.role, data.id);
        });
        localStorage.setItem('token', res.key);
        this.authService.isAuthenticated = true;

        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        this.loading = false;
      });

  }

}
