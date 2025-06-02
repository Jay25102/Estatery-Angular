import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matKeyboardArrowRightRound } from '@ng-icons/material-icons/round';

@Component({
  selector: 'app-benefits',
  imports: [NgIcon],
  viewProviders: [provideIcons({matKeyboardArrowRightRound})],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {

}
