import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  api_url = "https://chicken-coop.p.rapidapi.com/games";
  api_key = "e1302c32d4msh235d8cf46358794p1b0804jsn8c743648faad";
  api_title = "?title=";
  api_platform = "?platform=";


  constructor(private http : HttpClient) { }

   get_video_game(name){
     
    return this.http.get(this.api_url + this.api_title + name,{ headers :{
      'x-rapidapi-host' :  'chicken-coop.p.rapidapi.com',
      'x-rapidapi-key'  : this.api_key}}).toPromise();
  }
  
  get_video_game_detail(name,platform){
    let platform_name :string;
    if (platform === 'PC') {
    return this.http.get(this.api_url +"/"+ name,{ headers :{
      'x-rapidapi-host' :  'chicken-coop.p.rapidapi.com',
      'x-rapidapi-key'  : this.api_key}}).toPromise();
    }
      else 
      
    {
      switch (platform) {
        case 'PS4': platform_name = 'playstation-4'; break;
        case 'Switch': platform_name = 'switch'; break;
        case 'XONE' : platform_name = 'xbox-one'; break;
        case 'PS3' : platform_name = 'playstation-3'; break;
        case 'PS2' : platform_name = 'playstation-2'; break;
        case 'WII' : platform_name = 'wii'; break;
        case 'VITA' : platform_name = 'playstation-vita'; break;
        case '3DS' : platform_name = '3ds'; break;
        case 'DS' : platform_name = 'ds'; break;
        case 'PS' : platform_name = 'playstation'; break;
        case 'WIIU' : platform_name = 'wii-u' ; break;
        case 'PSP' : platform_name = 'psp'; break;
        case 'X360' : platform_name = 'xbox-360'; break;
        case 'GC' : platform_name = 'gamecube' ; break;
        case 'N64' : platform_name = 'nintendo-64'; break;
        case 'iOS' : platform_name = 'ios'; break;


        
        default : platform_name = platform;
      }

      return this.http.get(this.api_url +"/"+ name + this.api_platform + platform_name ,{ headers :{
        'x-rapidapi-host' :  'chicken-coop.p.rapidapi.com',
        'x-rapidapi-key'  : this.api_key}}).toPromise();
      }

    } 


}
      

  



