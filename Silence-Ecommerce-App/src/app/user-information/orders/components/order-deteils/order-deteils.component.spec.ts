import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeteilsComponent } from './order-deteils.component';

describe('OrderDeteilsComponent', () => {
  let component: OrderDeteilsComponent;
  let fixture: ComponentFixture<OrderDeteilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDeteilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
