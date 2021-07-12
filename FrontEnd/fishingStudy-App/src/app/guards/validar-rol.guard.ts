import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { Usuario } from '../home-page/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SettingGuard implements CanActivate, CanLoad {
  
  usuario!:Usuario;

  constructor( private authService: AuthService,
               private router: Router ){
                this.usuario = this.authService.user;
    }

  canActivate(): boolean{
    console.log(this.usuario.role)

    if(!(this.usuario.role === "admin"))
        this.router.navigateByUrl('/home-page/opening');
      
    return true
  }

  canLoad(): boolean{
    console.log(this.authService.user.role)
    if(!(this.usuario.role === "admin"))
        this.router.navigateByUrl('/home-page/opening');
      
    return true
  }
  
}
