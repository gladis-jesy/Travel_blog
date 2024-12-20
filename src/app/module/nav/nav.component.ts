import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  navList = ['Home', 'Destinations', 'Blog', 'About Me', 'Contact']
  selectNavigation = 'Home'
  activeNavigation(getNav: any) {
    this.selectNavigation = getNav
  }

}
