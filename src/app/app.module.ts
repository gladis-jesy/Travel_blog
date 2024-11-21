import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogSiteComponent } from './blog-site/blog-site.component';
import { TravelBannerComponent } from './home-page/travel-banner/travel-banner.component';
import { ExploreCountryComponent } from './home-page/explore-country/explore-country.component';
import { IntroAboutComponent } from './home-page/intro-about/intro-about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    BlogSiteComponent,
    TravelBannerComponent,
    ExploreCountryComponent,
    IntroAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
