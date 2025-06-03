import { Component, signal } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { TenantsLandlordsComponent } from '../tenants-landlords/tenants-landlords.component';
import { ListingsComponent } from '../listings/listings.component';
import { CtaComponent } from '../cta/cta.component';
import { FooterComponent } from '../footer/footer.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-landing',
  imports: [HeroComponent, TenantsLandlordsComponent, ListingsComponent, CtaComponent, FooterComponent, BenefitsComponent, TestimonialsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  small = signal('small');
  medium = signal('medium');
  large = signal('large');
}
