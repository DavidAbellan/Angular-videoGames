import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailComponent} from './game-detail/game-detail.component'


const routes: Routes = [{
  path : 'game/:name/:platform' , component : GameDetailComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
