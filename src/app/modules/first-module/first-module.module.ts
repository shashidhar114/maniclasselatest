import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstModuleOneComponent } from './components/first-module-one/first-module-one.component';
import { FirstModuleTwoComponent } from './components/first-module-two/first-module-two.component';
import { FirstModuleThreeComponent } from './components/first-module-three/first-module-three.component';


@NgModule({
  declarations: [
    FirstModuleOneComponent,
    FirstModuleTwoComponent,
    FirstModuleThreeComponent
  ],
  imports: [
    CommonModule,
    FirstModuleRoutingModule
  ]
})
export class FirstModuleModule { }
