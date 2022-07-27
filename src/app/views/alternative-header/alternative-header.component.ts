import { ModalLoginComponent } from './../modal-login/modal-login.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alternative-header',
  templateUrl: './alternative-header.component.html',
  styleUrls: ['./alternative-header.component.css']
})
export class AlternativeHeaderComponent implements OnInit {

  pesquisar!: boolean
  login!: any

  constructor(Router: Router,
              public dialog: MatDialog) {
    this.pesquisar = false

    this.login = localStorage.getItem('login_hbo_clone')

    console.log(this.login)
  }

  ngOnInit(): void {
  }

  search(){

    if(this.pesquisar)
      this.pesquisar = false
      else
      this.pesquisar = true
  }
  openDialog(): void {
    this.dialog.open(ModalLoginComponent, {
      width: '450px',
    });
  }
}
