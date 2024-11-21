import { Component } from '@angular/core';
import {ChinaTravelService} from '../../../core/services/china-travel.service'

@Component({
  selector: 'app-explore-country',
  templateUrl: './explore-country.component.html',
  styleUrls: ['./explore-country.component.scss']
})
export class ExploreCountryComponent {

  constructor( private chinaTravelService:ChinaTravelService ) {}
  travelData: any;
  ngOnInit() {
    this.chinaTravelService.getdataTravelChina().subscribe(
      (data) => {
        this.travelData = data;
        console.log(this.travelData);
      },
      (error) => {
        console.error('Error fetching travel data:', error);
      }
    );
  }

}
