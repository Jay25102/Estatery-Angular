import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsLandlordsComponent } from './tenants-landlords.component';

describe('BenefitsComponent', () => {
  let component: TenantsLandlordsComponent;
  let fixture: ComponentFixture<TenantsLandlordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantsLandlordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantsLandlordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
