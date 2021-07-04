import { Component, OnInit } from '@angular/core';
import { OptionSetting } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  typesOfShoes: string[] = ['Perfil y cuenta', 'Gestion de usuarios', 'Loafers', 'Moccasins', 'Cerrar sesion'];
  optionSetting:OptionSetting[] = [
    {name: "Cuenta", url:"opening"},
    {name: "Gestion de usuarios", url:"setting"},
    {name: "Cerrar sesion", url:"/auth/login"},
  ];

  statisticsSetting:OptionSetting[] = [
    {name: "Estadistica", url:"statistics"}
  ];

  mapsSetting:OptionSetting[] = [
    {name: "Mapas", url:"map"}
  ];

  surveySetting:OptionSetting[] = [
    {name: "Crear Encuesta", url:"survey"}
  ];

  calendarySetting:OptionSetting[] = [
    {name: "Ver Calendario", url:"calendary"}
  ];

  warningSetting:OptionSetting[] = [
    {name: "Ver Alertas", url:"early-warning"}
  ];

  configurationSetting:OptionSetting[] = [
    {name: "Cambiar configuracion", url:"configuration"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
