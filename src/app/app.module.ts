import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTitleComponent } from './search-title/search-title.component';
import { ApiRestService } from './api-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { GamesLayoutComponent } from './games-layout/games-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchTitleComponent,
    GameComponent,
    GamesLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
