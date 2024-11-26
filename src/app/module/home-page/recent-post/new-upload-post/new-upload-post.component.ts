import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-upload-post',
  templateUrl: './new-upload-post.component.html',
  styleUrls: ['./new-upload-post.component.scss']
})
export class NewUploadPostComponent {
  @Output()closepopup =new EventEmitter<any>()
  cancel(value:any){
    this.closepopup.emit(value)
  }

}
