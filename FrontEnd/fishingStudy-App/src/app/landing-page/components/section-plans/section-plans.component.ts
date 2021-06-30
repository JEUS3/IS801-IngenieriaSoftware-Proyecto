import { Component, OnInit } from '@angular/core';
import { plan } from '../../../interfaces/plan.model';

@Component({
  selector: 'app-section-plans',
  templateUrl: './section-plans.component.html',
  styleUrls: ['./section-plans.component.css']
})
export class SectionPlansComponent implements OnInit {
  
  plans : plan[] = [
    {
      typePlan : 'Plan Basico',
      title :'Lo que necesitas',
      period : 'Mensual',
      cost : 100,
      description : 'Proporciona las herramientas necesarias para iniciar a impulsar su negocio permite a un asistente social seguir información estándar sobre una actividad ,miembros',
      features : [
        'Modulo estadistico',
        'Modulo de mapeo',
        ' Modulo gestion de informacion',
        'Usuarios limitados'
      ]
    },
    {
      typePlan : 'Plan Premium',
      title :'Lo que necesitas',
      period : 'Mensual',
      cost : 150,
      description : 'El Proporciona atención complementaria para ti y tu organizacion con acceso a beneficios especiales y coberturas adicionales a las ofrecidas por el Plan basico',
      features : [
        'Modulo estadistico',
        'Modulo de mapeo',
        ' Modulo gestion de informacion',
        'Usuarios ilimitados'
      ]
    },{
      typePlan : 'Plan Personalizado',
      title :'Lo que necesitas',
      period : 'Mensual',
      cost : 200,
      description : 'Proporciona un marco flexible en el que una organización puede generar elementos de plan personalizados que encajen con las necesidades específicas.',
      features : [
        'Modulo estadistico',
        'Modulo de mapeo',
        'Modulo gestion de informacion',
        'Usuarios ilimitados',
      ]
    }
  ]
  constructor() { 
  }

  ngOnInit(): void {
  }
 
}
