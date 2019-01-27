import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UnsplashComponent } from './unsplash/unsplash.component';
import {UnsplashService} from './services/unsplash.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    UnsplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [UnsplashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
