import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { FeaturedPostComponent } from './featured-post/featured-post.component';
import { NormalPostComponent } from './normal-post/normal-post.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavigationComponent,
    FeaturedPostComponent,
    NormalPostComponent,
    PageNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
