import { Component, inject, HostListener, afterNextRender, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-listings',
  imports: [CardComponent],
  templateUrl: './listings.component.html',
  styleUrl: './listings.component.css'
})
export class ListingsComponent {
  cardSize = signal('large');
  scrWidth:any;

  // currently displaying hardcoded cards since there is no backend
  // change this later
  cardsTop = [
    {
      imgUrl: 'palm_harbor.png',
      price: '2,095',
      areaName: 'Palm Harbor',
      location: '2699 Green Valley, Highland Lake, FL',
      numRooms: '3 beds',
      numBaths: '2 Bathrooms',
      size: '5x7',
      isPopular: 'true',
    },
    {
      imgUrl: 'beverly.png',
      price: '2,700',
      areaName: 'Beverly Springfield',
      location: '2821 Lake Sevilla, Palm Harbor, TX',
      numRooms: '4 Beds',
      numBaths: '2 Bathrooms',
      size: '6x7.5',
      isPopular: 'true',
    },
    {
      imgUrl: 'faulkner.png',
      price: '4,550',
      areaName: 'Faulkner Ave',
      location: '909 Woodland St. Michigan, IN',
      numRooms: '4 Beds',
      numBaths: '3 Bathrooms',
      size: '8x10',
      isPopular: 'true',
    },
  ]
  cardsBot = [
    {
      imgUrl: 'st_crystal.png',
      price: '2,400',
      areaName: 'St. Crystal',
      location: '210 US Highway, Highland Lake, FL',
      numRooms: '4 Beds',
      numBaths: '2 Bathrooms',
      size: '6x8 ',
      isPopular: 'false',
    },
    {
      imgUrl: 'cove_red.png',
      price: '1,500',
      areaName: 'Cove Red',
      location: '243 Curlew Road, Palm Harbor, TX',
      numRooms: '2 Beds',
      numBaths: '1 Bathroom',
      size: '5x7.5',
      isPopular: 'false',
    },
    {
      imgUrl: 'tarpon_bay.png',
      price: '1,600',
      areaName: 'Tarpon Bay',
      location: '103 Lake Shores, Michigan, IN',
      numRooms: '3 Beds',
      numBaths: '1 Bathroom',
      size: '5x7',
      isPopular: 'false',
    },
  ]

  @HostListener('window:resize', ['$event'])
  getScreenSize(): void {
    console.log(this.cardSize);
    this.scrWidth = window.innerWidth;
    // console.log(this.scrWidth);
    if (this.scrWidth < 1200) {
      this.cardSize = signal('medium');
      console.log("setting cardSize to " + this.cardSize);
    }
    else {
      this.cardSize = signal('large');
    }
  }

  constructor() {
    afterNextRender(() => this.getScreenSize());
  }
}
