import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent {
onShowModel:boolean=false;

  onOpenUpload() {
    this.onShowModel = true
  }

  getClosePoupValue(val:any){
    this.onShowModel = val
  }

}
