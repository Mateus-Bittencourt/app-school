import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
