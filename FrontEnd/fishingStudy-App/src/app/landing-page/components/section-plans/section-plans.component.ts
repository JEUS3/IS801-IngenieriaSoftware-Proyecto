import { Component, OnInit } from '@angular/core';
import { PlansService } from '../../../services/plans.service';

@Component({
  selector: 'app-section-plans',
  templateUrl: './section-plans.component.html',
  styleUrls: ['./section-plans.component.css']
})
export class SectionPlansComponent implements OnInit {

  constructor( private plansService:PlansService) { 
  }

  ngOnInit(): void {
   
  }
  planes = this.plansService.getPlans();
}
