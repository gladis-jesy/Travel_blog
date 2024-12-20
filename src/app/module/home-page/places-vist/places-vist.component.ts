import { Component } from '@angular/core';
import {ChinaTravelService} from '../../../core/services/china-travel.service'

@Component({
  selector: 'app-places-vist',
  templateUrl: './places-vist.component.html',
  styleUrls: ['./places-vist.component.scss']
})
export class PlacesVistComponent {
  slideConfig = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1019,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
}
