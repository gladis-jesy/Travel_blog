import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './module/nav/nav.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { BlogSiteComponent } from './module/blog-site/blog-site.component';
import { TravelBannerComponent } from './module/home-page/travel-banner/travel-banner.component';
import { IntroAboutComponent } from './module/home-page/intro-about/intro-about.component';
import { ExploreCountryComponent } from './module/home-page/explore-country/explore-country.component';
import { PlacesVistComponent } from './module/home-page/places-vist/places-vist.component';
import { RecentPostComponent } from './module/home-page/recent-post/recent-post.component';
import { NewsletterComponent } from './module/home-page/newsletter/newsletter.component';
import { FooterComponent } from './module/home-page/footer/footer.component';
import { BlogVideosComponent } from './module/home-page/blog-videos/blog-videos.component';
import { AboutMeComponent } from './module/home-page/recent-post/about-me/about-me.component';
import { SocialInfoComponent } from './module/home-page/recent-post/social-info/social-info.component';
import { InstaPostComponent } from './module/home-page/recent-post/insta-post/insta-post.component';
import { SearchComponent } from './module/home-page/recent-post/search/search.component';
import { DetailViewComponent } from './module/home-page/places-vist/detail-view/detail-view.component';
import { QuestionAskComponent } from './module/home-page/question-ask/question-ask.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


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
    DetailViewComponent,
    QuestionAskComponent
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
