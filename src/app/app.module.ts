import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildtwoComponent } from './components/childtwo/childtwo.component';
import { ChildthreeComponent } from './components/childthree/childthree.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CustomDirective } from './Directive/custom.directive';
import { ToggleDirective } from './Directive/toggle.directive';
import { TooltipDirective } from './Directive/tooltip.directive';
import { SamplePipe } from './pipes/sample.pipe';
import { CustomPipe } from './pipes/custom.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    ChildOneComponent,
    ChildtwoComponent,
    ChildthreeComponent,
    ParentComponent,
    ChildComponent,
    CustomDirective,
    ToggleDirective,
    TooltipDirective,
    SamplePipe,
    CustomPipe,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
