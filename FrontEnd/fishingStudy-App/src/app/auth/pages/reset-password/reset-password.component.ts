import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordRequest } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  
  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {
  }

  hide: boolean = true;
  hide2: boolean = true;
  
  resetPass:FormGroup = this.fb.group({
    "newPassword": ['', [Validators.required, Validators.pattern(this.authService.passwordRegex)],],
    "confirmPassword": ['', [Validators.required], [this.authService.samePassword] ]
  });

  

  valid( name: string ){
    return this.resetPass.get(name)?.hasError && this.resetPass.get(name)?.touched
  }

  reset(){
    if(this.resetPass.invalid){
      return;
    }
    // comunicarse al backend mediante un servicio
    const payload: ResetPasswordRequest = {
      "newPassword": this.resetPass.value.newPassword,
      "token": this.route.snapshot.params.token
    };

    this.authService.resetPassword(payload)
      .subscribe(ok => {
        if (ok === true) {
          Swal.fire({
            icon: 'success',
            title: '¡La clave fue cambiada con éxito!',
            showConfirmButton: true
          }).then(()=>{
            // redireccionar a login
            this.router.navigateByUrl("/auth/login");
          });
        } else {
          // console.log(ok)
          Swal.fire("Surgió un error!", `${ok}`, "error");
        }
      });
    /* this.resetPass.get('confirmPassword')?.reset(); */
  }

}
