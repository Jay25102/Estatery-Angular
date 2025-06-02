import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matKeyboardArrowRightRound } from '@ng-icons/material-icons/round';

@Component({
  selector: 'app-tenants-landlords',
  imports: [NgIcon],
  viewProviders: [provideIcons({matKeyboardArrowRightRound})],
  templateUrl: './tenants-landlords.component.html',
  styleUrl: './tenants-landlords.component.css'
})
export class TenantsLandlordsComponent {

}
