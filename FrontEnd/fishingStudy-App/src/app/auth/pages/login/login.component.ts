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
   
    const {email} = this.miFormulario.value
    if(!this.validateEmail(email) || email == ""){
        Swal.fire({background:'#575B65',title:'<p style="color:#fff"> El formato del correo no es valido<p>'});
        
    }else{
      this.authService.forgotPassword(email)
        .subscribe(ok =>{
          if(ok === true){
            Swal.fire({
              background:'#575B65',
              title:'<p style="color:#fff">Instrucciones enviadas</p>',
              html : `<p  style="text-align:left; color:#fff">Hemos enviado instrucciones para cambiar tu contraseña a ${email}.<br> Revise la bandeja de entrada y la carpeta de spam.</p>`
            })
          }else{
            // console.log(ok)
            Swal.fire("Error",`${ok}`,"error");
          }
      });
    }
  }

  validateEmail(email:string) {
    email = email.trim();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
}
