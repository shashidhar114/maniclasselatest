import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdmoduleRoutingModule } from './thirdmodule-routing.module';
import { ThirdmoduleComponent } from './thirdmodule.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    ThirdmoduleComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ThirdmoduleRoutingModule
  ]
})
export class ThirdmoduleModule { }
