import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent implements OnInit {
  usuario!:Usuario;
  constructor( private authService:AuthService,
               private router:Router ) { }

  ngOnInit(): void {
    this.usuario = this.authService.user;
  }

  logout(){
    this.router.navigateByUrl("/auth/login")
  }

}
