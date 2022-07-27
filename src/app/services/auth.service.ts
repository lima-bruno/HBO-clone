import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
import { catchError } from 'rxjs';

interface AuthResponse{
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  cadastro(email: string, senha: string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjj4Pnc-O6dB_zec8BTl-2FL7gcFkAsvc',
      {
        email:email,
        password:senha,
        returnSecureToken: true
      }
    );
  }
}
