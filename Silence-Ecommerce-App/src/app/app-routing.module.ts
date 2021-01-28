import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)},
  {path: 'common-fronts', loadChildren: () => import('./common-pages/common-pages.module').then(m => m.CommonPagesModule)},
  {path: 'user-information', loadChildren: () => import('./user-information/user-information.module').then(m => m.UserInformationModule)},
  {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
