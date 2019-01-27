import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class UnsplashService {
  accessKey: string;
  secretKey: string;
  listUsers: any[] = [];
  constructor(private http: HttpClient) {
    this.accessKey = 'aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5';
    this.secretKey = 'a5ab4ed2efdc772dca8d5636a26c0d897907df38cd92baa9067e57093d9596b5';
  }

  searchUsers(query: string) {
   return this.http.get('https://api.unsplash.com/search/users?query=' + query + '&per_page=100000000&client_id=' + this.accessKey);
  }
}
