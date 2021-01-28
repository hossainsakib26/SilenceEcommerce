import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TearmsAndConditionsComponent } from './tearms-and-conditions/tearms-and-conditions.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'tearms-condition', component: TearmsAndConditionsComponent},
  {path: 'wish-list', loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListModule)},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CommonPagesRoutingModule {}
