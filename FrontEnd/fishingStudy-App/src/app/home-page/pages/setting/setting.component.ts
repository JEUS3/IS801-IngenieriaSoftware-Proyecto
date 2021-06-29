import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    name    :["", [Validators.required], []],
    email   :["", [Validators.required], []],
    password:["", [Validators.required], []],
    role    :["", [Validators.required], []],
  });

  selected:string=""
  constructor( private fb:FormBuilder,
               private authService:AuthService ) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.miFormulario)
      .subscribe(ok=>{
        if(ok===true){
          Swal.fire({
            icon: 'success',
            title: 'El usuario se creo de forma exitosa',
            showConfirmButton: false,
            timer: 1500
          });
        }else{
          Swal.fire("Detectamos un error.",`${ok}`,"error");
        }
      });
  }
}
