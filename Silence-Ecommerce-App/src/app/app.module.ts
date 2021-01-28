import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './common-pages/about-us/about-us.component';
import { ContactUsComponent } from './common-pages/contact-us/contact-us.component';
import { HomeComponent } from './common-pages/home/home.component';
import { TearmsAndConditionsComponent } from './common-pages/tearms-and-conditions/tearms-and-conditions.component';

@NgModule({
  declarations: [
    AboutUsComponent, ContactUsComponent, HomeComponent, TearmsAndConditionsComponent, AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
