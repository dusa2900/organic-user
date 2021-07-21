import { Component } from '@angular/core';
import { NgxImgZoomService } from "ngx-img-zoom";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="by Dusa Goutham";

  title = "CodeSandbox";


  enableZoom: boolean = true;
  //previewImageSrc = 'pathToImage';
  //zoomImageSrc = 'pathToImage';
 
  constructor(private ngxImgZoom: NgxImgZoomService) {
    this.ngxImgZoom.setZoomBreakPoints([{w: 100, h: 100}, {w: 150, h: 150}, {w: 200, h: 200}, {w: 250, h: 250}, {w: 300, h: 300}]);
  }

/*
  myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
*/


  zoomImageSrc:any="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  previewImageSrc:any="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";

}
