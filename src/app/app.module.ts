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
import { PlacesVistComponent } from './home-page/places-vist/places-vist.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RecentPostComponent } from './home-page/recent-post/recent-post.component';
import { NewsletterComponent } from './home-page/newsletter/newsletter.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { BlogVideosComponent } from './home-page/blog-videos/blog-videos.component';
import { AboutMeComponent } from './home-page/recent-post/about-me/about-me.component';
import { SocialInfoComponent } from './home-page/recent-post/social-info/social-info.component';
import { InstaPostComponent } from './home-page/recent-post/insta-post/insta-post.component';
import { SearchComponent } from './home-page/recent-post/search/search.component';
import { DetailViewComponent } from './home-page/places-vist/detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    BlogSiteComponent,
    TravelBannerComponent,
    ExploreCountryComponent,
    IntroAboutComponent,
    PlacesVistComponent,
    RecentPostComponent,
    NewsletterComponent,
    FooterComponent,
    BlogVideosComponent,
    AboutMeComponent,
    SocialInfoComponent,
    InstaPostComponent,
    SearchComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
