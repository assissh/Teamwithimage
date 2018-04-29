import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';


const routes: Routes = [
  {path: 'team_list', component: TeamComponent},
  {path: 'team_detail', component: TeamDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponenets = [TeamComponent, TeamDetailComponent ];
