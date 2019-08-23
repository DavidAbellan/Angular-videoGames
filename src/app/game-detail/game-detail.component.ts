import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRestService } from '../api-rest.service'

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  name : any;
  game : any;
  platform: string;
  constructor(private route : ActivatedRoute, private ApiCall : ApiRestService) { }

  ngOnInit() {
    this.name = this.route;
    this.name = this.name.params.value;
    this.platform = this.name.platform;
    this.ApiCall.get_video_game_detail(this.name.name,this.platform).then(res =>{
      this.game = res ;
      this.game = this.game.result;
      
      console.log(this.game);
    })

  }


}
