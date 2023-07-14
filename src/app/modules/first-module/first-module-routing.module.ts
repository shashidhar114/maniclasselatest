import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstModuleOneComponent } from './components/first-module-one/first-module-one.component';
import { FirstModuleThreeComponent } from './components/first-module-three/first-module-three.component';
import { FirstModuleTwoComponent } from './components/first-module-two/first-module-two.component';

const routes: Routes = [
{path:"", component:FirstModuleOneComponent},
{path:"one", component:FirstModuleOneComponent},
{path:"two", component:FirstModuleTwoComponent},
{path:"three", component:FirstModuleThreeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
