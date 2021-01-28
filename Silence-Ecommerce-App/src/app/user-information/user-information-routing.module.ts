import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryReturnsComponent } from './delivery-returns/delivery-returns.component';

const routes: Routes = [
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'delivery-returns', component: DeliveryReturnsComponent},
  {path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInformationRoutingModule {}
