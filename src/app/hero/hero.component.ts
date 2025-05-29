import { Component, computed, inject, input, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardsizesService } from "../services/cardsizes.service";

@Component({
  selector: 'app-hero',
  imports: [CardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  cardSizeService = inject(CardsizesService);

}
