import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsizesService {
  small: string = "small";
  medium: string = "medium";
  large: string = "large";
  
  constructor() { }
}
