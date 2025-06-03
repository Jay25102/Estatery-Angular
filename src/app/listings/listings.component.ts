import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardsizesService } from "../services/cardsizes.service";

@Component({
  selector: 'app-listings',
  imports: [CardComponent],
  templateUrl: './listings.component.html',
  styleUrl: './listings.component.css'
})
export class ListingsComponent {
  cardSizeService = inject(CardsizesService);
}
