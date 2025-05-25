import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordTenantInformationComponent } from './landlord-tenant-information.component';

describe('LandlordTenantInformationComponent', () => {
  let component: LandlordTenantInformationComponent;
  let fixture: ComponentFixture<LandlordTenantInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandlordTenantInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandlordTenantInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
