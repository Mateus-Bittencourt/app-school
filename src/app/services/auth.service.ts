import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn(): boolean {
    return !!localStorage.email;
  }

  public currentEmail(): string {
    return localStorage.email;
  }

  public login(email: string, password: string): void {
    localStorage.email = email;
    localStorage.passwrod = password;
  }

  public logout(): void {
    // localStorage.removeItem('email');
    // localStorage.removeItem('password');
    // localStorage.removeItem('isLoggedIn');
    localStorage.clear();

  }
}
