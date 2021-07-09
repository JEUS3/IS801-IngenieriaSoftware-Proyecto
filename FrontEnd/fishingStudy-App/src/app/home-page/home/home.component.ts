import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

export interface OptionSetting{
  name:string,
  url :string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('snav') snav!: MatSidenav;
  panelOpenState = false;
  typesOfShoes: string[] = ['Perfil y cuenta', 'Gestion de usuarios', 'Loafers', 'Moccasins', 'Cerrar sesion'];
  optionSetting:OptionSetting[] = [
    {name: "Editar Cuenta", url:"opening"},
    {name: "Gestion de usuarios", url:"setting"},
    {name: "Cerrar sesion", url:"/auth/login"},
  ];
  constructor( private router:Router,
    private  authService: AuthService) { }

  ngOnInit(): void {
  }

  navagate(url:string){
    this.router.navigateByUrl(`home-page/${url}`)
  }

  test(elementUrl: string){
    if( elementUrl === this.optionSetting[2].url){
      this.authService.logOut();
    }else{
      this.snav.close()
    }
  }
}
