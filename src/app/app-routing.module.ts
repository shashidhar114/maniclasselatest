import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildthreeComponent } from './components/childthree/childthree.component';
import { ChildtwoComponent } from './components/childtwo/childtwo.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { FirstModuleModule } from './modules/first-module/first-module.module';
import { SecondModuleModule } from './modules/second-module/second-module.module';
import { ThirdmoduleModule } from './modules/third-module/thirdmodule/thirdmodule.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component:HomeComponent,
children:[
  {path:"childone",component:ChildOneComponent},
  {path:"childtwo",component:ChildtwoComponent},
  {path:"childthree",component:ChildthreeComponent},
]
  },
  {path:"contact",component:ContactUsComponent},
  {path:"about/:id",component:AboutUsComponent},                         
  {path:"parent", component: ParentComponent},
  {path:"firstmodule", loadChildren:() => import('./modules/first-module/first-module.module').then(m => FirstModuleModule)},
  {path:"secondmodule", loadChildren:() => import('./modules/second-module/second-module.module').then(m => SecondModuleModule)},
  {path:"thirdmodule", loadChildren:() => import('./modules/third-module/thirdmodule/thirdmodule.module').then(m => ThirdmoduleModule)},
  // {path:"**",component:PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
