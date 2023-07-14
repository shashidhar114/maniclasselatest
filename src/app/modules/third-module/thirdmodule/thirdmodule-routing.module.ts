import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ThirdmoduleComponent } from './thirdmodule.component';

const routes: Routes = [
  {path:'', component:ThirdmoduleComponent},
  {path:'thirdone', component:ThirdmoduleComponent},
  {path:'login', component:LoginComponent},
  {path:'singnup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdmoduleRoutingModule { }
