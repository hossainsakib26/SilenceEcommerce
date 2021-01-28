import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHystoryComponent } from './components/order-hystory/order-hystory.component';
import { OrderDeteilsComponent } from './components/order-deteils/order-deteils.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'order-hystory', component: OrderHystoryComponent},
  {path: 'order-details', component: OrderDeteilsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
