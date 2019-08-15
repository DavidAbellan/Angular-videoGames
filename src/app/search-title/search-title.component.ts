import { Component, OnInit, Input } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-search-title',
  templateUrl: './search-title.component.html',
  styleUrls: ['./search-title.component.scss']
})
export class SearchTitleComponent implements OnInit {
  @Input() word : any;
  games : any; 

  constructor( private apiCall : ApiRestService) { }

  ngOnInit() {
  }

  search(word) : any {
    this.apiCall.get_video_game(word).then(resp => {
      this.word = word ;
      this.games = resp;
      this.games = this.games.result;
      console.log(this.games);
    }).catch(console.error);

  }

}
