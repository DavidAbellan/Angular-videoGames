import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  api_url = "https://chicken-coop.p.rapidapi.com/games";
  api_key = "e1302c32d4msh235d8cf46358794p1b0804jsn8c743648faad";
  api_title = "?title="


  constructor(private http : HttpClient) { }

   get_video_game(name){
     
    return this.http.get(this.api_url + this.api_title + name,{ headers :{
      'x-rapidapi-host' :  'chicken-coop.p.rapidapi.com',
      'x-rapidapi-key'  : this.api_key}}).toPromise();
  }
}
