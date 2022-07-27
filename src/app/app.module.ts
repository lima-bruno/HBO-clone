import { RigthAlternativeMenuComponent } from './views/alternative-header/rigth-alternative-menu/rigth-alternative-menu.component';
import { LeftMenuAlternativeComponent } from './views/alternative-header/left-menu/left-menu.component';
import { AppRoutesModule } from './app.routes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { PageComponent } from './views/page/page.component';
import { BannerComponent } from './views/banner/banner.component';
import { BannerOptionsComponent } from './views/banner/banner-options/banner-options.component';
import { WatchingComponent } from './views/watching/watching.component';
import { AlternativeHeaderComponent } from './views/alternative-header/alternative-header.component';
import { SearchComponent } from './views/search/search.component';
import { ExploreCollectionsComponent } from './views/search/explore-collections/explore-collections.component';
import { JustForYouComponent } from './views/just-for-you/just-for-you.component';
import { OutMenuComponent } from './views/alternative-header/out-menu/out-menu.component';
import { ModalLoginComponent } from './views/modal-login/modal-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    RigthAlternativeMenuComponent,
    SearchComponent,
    ExploreCollectionsComponent,
    JustForYouComponent,
    OutMenuComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    SwiperModule,
    MatProgressBarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
