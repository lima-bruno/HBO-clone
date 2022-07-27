import { SearchComponent } from './views/search/search.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./views/login/login.component";
import { PageComponent } from "./views/page/page.component";

const appRoutes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full' },
  {path: 'page', component: PageComponent},
  {path: 'search', component: SearchComponent}
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
