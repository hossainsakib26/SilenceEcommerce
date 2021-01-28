import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryReturnsComponent } from './delivery-returns.component';

describe('DeliveryReturnsComponent', () => {
  let component: DeliveryReturnsComponent;
  let fixture: ComponentFixture<DeliveryReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryReturnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
