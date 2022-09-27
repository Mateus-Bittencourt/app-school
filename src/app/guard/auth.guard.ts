import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): boolean {
    let hasAccess: boolean = this.authService.isLoggedIn();
    if (!hasAccess) {
     alert('Você precisa logar para acessar essa página');
     this.router.navigate(['/login']);
    }
    return hasAccess;
  }
}
