import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./views/login/login.component";
import { PageComponent } from "./views/page/page.component";

const appRoutes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full' },
  {path: 'page', component: PageComponent}
];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutesModule{

}
