import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondModuleOneComponent } from './components/second-module-one/second-module-one.component';
import { SecondModuleTwoComponent } from './components/second-module-two/second-module-two.component';

const routes: Routes = [
  {path:"", component:SecondModuleOneComponent},
  {path:"one", component:SecondModuleOneComponent},
  {path:"two", component:SecondModuleTwoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondModuleRoutingModule { }
