import { Injectable }           from '@angular/core';
import { Router, CanActivate }  from '@angular/router';
import { AuthService }          from '../_services/index';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    if (!this.auth.authenticated()) {
      this.router.navigate(['main']);
      return false;
    }
    return true;
  }

}

