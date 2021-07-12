import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from '../interfaces/interfaces';

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
  panelOpenState = false;
  typesOfShoes: string[] = ['Perfil y cuenta', 'Gestion de usuarios', 'Loafers', 'Moccasins', 'Cerrar sesion'];
  optionSetting:OptionSetting[] = [
    {name: "Editar Cuenta", url:"opening"},
    {name: "Gestion de usuarios", url:"setting"},
    {name: "Cerrar sesion", url:"/auth/login"},
  ];
  
  viewRolUser: { [nameRol: string]: string[] } = {
    "admin": ["calendar","document",
                "Editar Cuenta","Gestion de usuarios", "Cerrar sesion"
              ],
    
    "biologo": ["climate","calendar","document",
                  "zones","statistics","survey", "Cerrar sesion"
                ],
  }

  

  usuario!:Usuario;

  constructor( private authService:AuthService,
               private router:Router ) { }

  ngOnInit(): void {
    this.usuario = this.authService.user;
  }

  navagate(url:string){
    this.router.navigateByUrl(`home-page/${url}`)
  }

  isAllowed(componentName:string){
    //console.log(componentName, " ", this.viewRolUser[this.usuario.role].includes(componentName))
    return this.viewRolUser[this.usuario.role].includes(componentName);
  }

}
