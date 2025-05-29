import { Component, computed, inject, input, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardsizesService } from "../services/cardsizes.service";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matCalendarMonthRound } from '@ng-icons/material-icons/round';

@Component({
  selector: 'app-hero',
  imports: [CardComponent, NgIcon],
  viewProviders: [provideIcons({matCalendarMonthRound})],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  cardSizeService = inject(CardsizesService);

}
