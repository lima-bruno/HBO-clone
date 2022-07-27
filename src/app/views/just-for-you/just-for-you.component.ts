import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-just-for-you',
  templateUrl: './just-for-you.component.html',
  styleUrls: ['./just-for-you.component.css']
})
export class JustForYouComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 1,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true }
  };

  jfyList: Array<any> = [
    {banner:'bebeLT.jpg'},
    {banner:'ben10.jpg'},
    {banner:'flapjack.jpg'},
    {banner:'gumball.jpg'},
    {banner:'monica.jpg'},
    {banner:'teenTitans.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
