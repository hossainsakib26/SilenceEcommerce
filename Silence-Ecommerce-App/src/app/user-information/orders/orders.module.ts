import { NgModule } from '@angular/core';
import { OrderHystoryComponent } from './components/order-hystory/order-hystory.component';
import { OrderDeteilsComponent } from './components/order-deteils/order-deteils.component';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [OrderHystoryComponent, OrderDeteilsComponent],
  imports: [
    OrdersRoutingModule
  ],
  exports: []
})
export class OrdersModule { }
