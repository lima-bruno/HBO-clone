import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: ['./watching.component.css']
})
export class WatchingComponent implements OnInit {

  margin: string = '3rem'

  watchingList: Array<any> = [
    {name: "Scooby-Doo: Cadê Você?",season:'T1',
    episode:'E1',nextEP: false, banner:'scoobbb.jpg'},
    {name: "The Looney Tunes Show",season:'T1',
    episode:'E2',nextEP: false, banner:'lts.jpg'},
    {name: "Superman & Lois",season:'T1',
    episode:'E6',nextEP: true, banner:'super.jpg'},
    {name: "Warner Bros. Cartoons",season:'T14',
    episode:'E591',nextEP: false, banner:'perna.webp'},
    {name: "Attack on Titan: O Rugido do Despertar",season:'',
    episode:'',nextEP: false, banner:'takatae.webp'},
    {name: "A Mansão Foster Para Amigos Imaginários",season:'T1',
    episode:'E1',nextEP: false, banner:'mansao.jpg'},
    {name: "Euphoria",season:'T2',
    episode:'E3',nextEP: false, banner:'zendaya.webp'},
    {name: "Game of Thrones",season:'T1',
    episode:'E1',nextEP: false, banner:'got.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toRigth(){
    
  }
}
