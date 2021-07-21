import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//image zoom
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgxImgZoomModule  } from 'ngx-img-zoom';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgxImageZoomModule, NgxImgZoomModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
