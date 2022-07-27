import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions,Virtual,Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: ['./watching.component.css']
})

export class WatchingComponent implements OnInit {
  margin: string = '3rem'
  watchingList: Array<any> = [
    {name: "Scooby-Doo: Cadê Você?",season:'T1',
    episode:'E1',nextEP: false, banner:'scoobbb.jpg', isWatching:0},
    {name: "The Looney Tunes Show",season:'T1',
    episode:'E2',nextEP: false, banner:'lts.jpg', isWatching:54},
    {name: "Superman & Lois",season:'T1',
    episode:'E6',nextEP: true, banner:'super.jpg', isWatching:34},
    {name: "Warner Bros. Cartoons",season:'T14',
    episode:'E591',nextEP: false, banner:'perna.webp', isWatching:0},
    {name: "Attack on Titan: O Rugido do Despertar",season:'',
    episode:'',nextEP: false, banner:'takatae.webp', isWatching:0},
    {name: "A Mansão Foster Para Amigos Imaginários",season:'T1',
    episode:'E1',nextEP: false, banner:'mansao.jpg', isWatching:78},
    {name: "Euphoria",season:'T2',
    episode:'E3',nextEP: false, banner:'zendaya.webp', isWatching:10},
    {name: "Game of Thrones",season:'T1',
    episode:'E1',nextEP: false, banner:'got.jpg', isWatching:90}
  ]

  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 7,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true }
  };
  constructor() {
  }

  ngOnInit(): void {
  }

  toRigth(){

  }
  onSwiper(swiper: { update: () => void; }) {
    swiper.update();
  }
}
