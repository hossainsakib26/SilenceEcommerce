import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common-pages/home/home.component';
import { AboutUsComponent } from './common-pages/about-us/about-us.component';
import { ContactUsComponent } from './common-pages/contact-us/contact-us.component';
import { TearmsAndConditionsComponent } from './common-pages/tearms-and-conditions/tearms-and-conditions.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'tearms-condition', component: TearmsAndConditionsComponent},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},
  // {path: 'common-fronts', loadChildren: () => import('./common-pages/common-pages.module').then(m => m.CommonPagesModule)},
  {path: 'user-information', loadChildren: () => import('./user-information/user-information.module').then(m => m.UserInformationModule)},
  {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
