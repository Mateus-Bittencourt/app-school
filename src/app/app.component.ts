import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) {}

  public login(): void {
    localStorage.isLoggedIn = 'true';
    // thicd as.router.navigate(['/']);
  }

  public logout(): void {
    localStorage.isLoggedIn = 'false';
    // this.router.navigate(['/']);
  }
}
