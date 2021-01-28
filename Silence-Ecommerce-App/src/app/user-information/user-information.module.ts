import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInformationRoutingModule } from './user-information-routing.module';
import { DeliveryReturnsComponent } from './delivery-returns/delivery-returns.component';



@NgModule({
  declarations: [UserProfileComponent, DeliveryReturnsComponent],
  imports: [
    UserInformationRoutingModule
  ]
})
export class UserInformationModule { }
