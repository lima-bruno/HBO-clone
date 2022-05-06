import { RigthAlternativeMenuComponent } from './views/alternative-header/rigth-alternative-menu/rigth-alternative-menu.component';
import { LeftMenuAlternativeComponent } from './views/alternative-header/left-menu/left-menu.component';
import { AppRoutesModule } from './app.routes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { PageComponent } from './views/page/page.component';
import { BannerComponent } from './views/banner/banner.component';
import { BannerOptionsComponent } from './views/banner/banner-options/banner-options.component';
import { WatchingComponent } from './views/watching/watching.component';
import { AlternativeHeaderComponent } from './views/alternative-header/alternative-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageComponent,
    BannerComponent,
    BannerOptionsComponent,
    WatchingComponent,
    AlternativeHeaderComponent,
    LeftMenuAlternativeComponent,
    RigthAlternativeMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
