import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-games-layout',
  templateUrl: './games-layout.component.html',
  styleUrls: ['./games-layout.component.scss']
})
export class GamesLayoutComponent implements OnInit {
  @Input() games : any;
  constructor() { }

  ngOnInit() {
  }

}
