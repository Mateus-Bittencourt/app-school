import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {


  constructor(private router: Router, private authService: AuthService) {}


  public isLoggedIn: boolean = this.authService.isLoggedIn();
  public currentEmail: string = this.authService.currentEmail();

  public login(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  public logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.currentEmail = this.authService.currentEmail();
    this.router.navigate(['/']);
  }

  // ngOnInit(): void {
  // }

}
