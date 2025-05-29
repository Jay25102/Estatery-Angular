import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cardSize = input("medium");
  imgUrl = input("beverly.png");
  price = input("2,700");
  areaName = input("Beverly Springfield");
  location = input("2821 Lake Sevilla, Palm Harbor, TX");
  numRooms = input(4);
  numBaths = input(2);
  size = input("6x7.5");
  position = input();
}
