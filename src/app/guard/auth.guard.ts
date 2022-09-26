import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root"
})

export class AuthGuard implements CanActivate {

  public canActivate( route: ActivatedRouteSnapshot, _: RouterStateSnapshot): boolean {
   let hasAccess: boolean = localStorage.isLoggedIn == 'true';
   !hasAccess ? alert('Você não tem permissão') : null;
   return  hasAccess;
  }
}
