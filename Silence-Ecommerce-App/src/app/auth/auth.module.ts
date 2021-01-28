import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [RegistrationComponent, LoginComponent, ForgotPasswordComponent],
  imports: [
    AuthRoutingModule,
  ]
})
export class AuthModule { }
