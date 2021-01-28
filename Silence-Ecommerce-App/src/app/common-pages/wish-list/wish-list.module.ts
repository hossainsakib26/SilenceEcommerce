import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListRoutingModule } from './wish-list-routing.module';



@NgModule({
  declarations: [WishListComponent],
  imports: [
    // CommonModule,
    WishListRoutingModule,
  ]
})
export class WishListModule { }
