import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
 public team_members = [];
 public errorMsg;


  constructor(private _Teamservice: TeamService) { }

  ngOnInit() {
     this._Teamservice.getTeam()
       .subscribe(data => this.team_members = data,
                 error => this.errorMsg = error);
  }

}
