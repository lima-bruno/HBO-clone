import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-out-menu',
  templateUrl: './out-menu.component.html',
  styleUrls: ['./out-menu.component.css']
})
export class OutMenuComponent implements OnInit {

  email!: string;
  senha!: string;
  emailInvalido = false;
  emailExiste = false;

  constructor(private authService:AuthService) {}

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    this.email = form.form.controls['email'].value
    this.senha = form.form.controls['senha'].value

    this.authService.cadastro(this.email,this.senha).subscribe(
      resData =>{
        console.log("teste")
      },
      error=>{
        switch(error.error.error.message){
          case 'INVALID_EMAIL':
           this.emailInvalido = true
           break;
           case 'EMAIL_EXISTS':
            this.emailExiste = true
            break;
            default:
              console.log(error.error.error.message)
        }
      }
    )


  }

}
