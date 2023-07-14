import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { SecondModuleOneComponent } from './components/second-module-one/second-module-one.component';
import { SecondModuleTwoComponent } from './components/second-module-two/second-module-two.component';


@NgModule({
  declarations: [
    SecondModuleOneComponent,
    SecondModuleTwoComponent
  ],
  imports: [
    CommonModule,
    SecondModuleRoutingModule
  ]
})
export class SecondModuleModule { }
