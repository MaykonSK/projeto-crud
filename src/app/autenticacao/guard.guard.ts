import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class GuardGuard implements CanLoad {
  constructor(private router: Router) { }

  canLoad(route: Route) {
    let urlPath: string = route.path; //recupera a URL
    if (urlPath == 'usuarios') {
      alert("Não autorizado");
      return false;
    }
    return false;
  }
}
