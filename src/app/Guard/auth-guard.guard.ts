import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard {
  constructor(private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (sessionStorage.getItem('token') !== null)
      return true;
    else {
      Swal.fire({                  // sweetAlert2 - see app.module.ts
        icon: 'info',
        title: 'LOGIN !',
        text: 'You need to log in first!',
        // showClass: {
        //   popup: 'animate__animated animate__fadeInDown'
        // },
        // hideClass: {
        //   popup: 'animate__animated animate__fadeOutUp'
        // }
      });

      // this.router.navigate(['/home'], {
      //   queryParams: {returnUrl:state.url}
      // });


      return false;
    }
  }

}
