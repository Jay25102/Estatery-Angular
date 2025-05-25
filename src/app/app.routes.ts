import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "", component: LandingComponent},
    { path: "Rent", component: PageNotFoundComponent},
    { path: "Buy", component: PageNotFoundComponent},
    { path: "Sell", component: PageNotFoundComponent},
    { path: "**", component: PageNotFoundComponent},
];
