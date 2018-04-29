import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css'],
  providers: [TeamService]
})
export class TeamCreateComponent implements OnInit {
 team;
  constructor(private teamservice: TeamService) { }

  ngOnInit() {
    this.team = {
      Team_Test1: '',
      Team_Test2: '',
    };

  }
  CreateMember() {
 this.teamservice.postTeam(this.team).subscribe(
   response => {
     alert('Team' + this.team.Team_Test1 + 'hes been created');
   }
 ),
   error => console.log('error', error);
  }
}

