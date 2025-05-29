import { TestBed } from '@angular/core/testing';

import { CardsizesService } from './cardsizes.service';

describe('CardsizesService', () => {
  let service: CardsizesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsizesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
