import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../services/unsplash.service';
import {FormsModule} from '@angular/forms';
import {Users} from '../models/Users';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-unsplash',
  templateUrl: './unsplash.component.html',
  styleUrls: ['./unsplash.component.css', 'styles.scss']
})
export class UnsplashComponent implements OnInit {
  result: any[] = [];
  keyword = '';
  listPhotos: any[] = [];
  constructor(private unsplash: UnsplashService) { }

  searchUsers() {
     this.unsplash.searchUsers(this.keyword).subscribe((data: any) => this.result = data.results);
  }
  getUploadedPictures(photos: any[]) {
    this.listPhotos = [];
    for (var i = 0; i < photos.length; i++) {
      this.listPhotos.push(photos[i].urls.thumb);
    }
  }

  ngOnInit() {
    this.searchUsers();
  }

}
