import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TearmsAndConditionsComponent } from './tearms-and-conditions/tearms-and-conditions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommonPagesRoutingModule } from './common-pages-routing.module';




@NgModule({
  declarations: [HomeComponent, TearmsAndConditionsComponent, AboutUsComponent, ContactUsComponent],
  imports: [
    CommonPagesRoutingModule
  ]
})
export class CommonPagesModule { }
