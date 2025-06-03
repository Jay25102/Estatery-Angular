import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerLinks = [
    {
      id: 1,
      heading: 'SELL A HOME',
      links: [
        'Request and offer',
        'Pricing',
        'Reviews',
        'Stories'
      ]
    },
    {
      id: 2,
      heading: 'BUY A HOME',
      links: [
        'Buy',
        'Finance',
      ]
    },
    {
      id: 3,
      heading: 'BUY, RENT, AND SELL',
      links: [
        'Buy & sell properties',
        'Rent home',
        'Builder trade-up',
      ]
    },
    {
      id: 4,
      heading: 'TERMS & PRIVACY',
      links: [
        'Trust & Safety',
        'Terms of Service',
        'Privacy Policy',
      ]
    },
    {
      id: 5,
      heading: 'ABOUT',
      links: [
        'Company',
        'How it works',
        'Contact',
        'Investors',
      ]
    },
    {
      id: 6,
      heading: 'Resources',
      links: [
        'Blog',
        'Guides',
        'FAQ',
        'Help Center',
      ]
    },
  ]

  desktopView: boolean = true;
}
