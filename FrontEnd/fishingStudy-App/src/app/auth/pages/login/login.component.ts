import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean=true;
  miFormulario:FormGroup = this.fb.group({
    email   : [,[Validators.required],[]],
    password: [,[Validators.required],[]]
  });

  constructor(  private fb:FormBuilder,
                private authService:AuthService,
                private router:Router ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      email:"jean.boquin.s@gmail.com",
      password:"pythonjs",
    })
  }

  login(){
    const {email, password} = this.miFormulario.value
    this.authService.login(email, password)
      .subscribe(ok =>{
        if(ok === true){
          this.router.navigateByUrl("/home-page");
        }else{
          // console.log(ok)
          Swal.fire("Error",`${ok}`,"error");
        }
      });
  }
  
  forgotPassword(){

  }
}
