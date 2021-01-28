import { NgModule } from '@angular/core';
import { WishListComponent } from './wish-list/wish-list.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'wish-list', component: WishListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class WishListRoutingModule { }
