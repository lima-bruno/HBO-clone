import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-explore-collections',
  templateUrl: './explore-collections.component.html',
  styleUrls: ['./explore-collections.component.css']
})
export class ExploreCollectionsComponent implements OnInit {

  collections: Array<any> = [
    {banner:'best.jpg'},
    {banner:'got.jpg'},
    {banner:'hp.jpg'},
    {banner:'mulher.jpg'}
  ]

  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 7,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
