import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { ListingsComponent } from '../listings/listings.component';
import { LandlordTenantInformationComponent } from '../landlord-tenant-information/landlord-tenant-information.component';
import { CtaComponent } from '../cta/cta.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  imports: [HeroComponent, BenefitsComponent, ListingsComponent, LandlordTenantInformationComponent, CtaComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
