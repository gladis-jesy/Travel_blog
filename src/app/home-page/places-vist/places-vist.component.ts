import { Component } from '@angular/core';

@Component({
  selector: 'app-places-vist',
  templateUrl: './places-vist.component.html',
  styleUrls: ['./places-vist.component.scss']
})
export class PlacesVistComponent {
  slideConfig = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
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
