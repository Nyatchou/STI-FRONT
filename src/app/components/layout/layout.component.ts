import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  coursesList: {
    name: string;
    children: any;
  };
  isUserAuthenticated: boolean;
  constructor(private authService: AuthService) {
    console.log(localStorage.getItem('token'));
  }
  ngOnInit(): void {
    this.isUserAuthenticated =
      localStorage.getItem('token') !== undefined &&
      localStorage.getItem('token') !== null;
  }

  logout(): void {
    this.authService.logout();
    this.isUserAuthenticated =
      localStorage.getItem('token') !== undefined &&
      localStorage.getItem('token') !== null;
  }
}
