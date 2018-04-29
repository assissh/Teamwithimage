import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})


export class TeamComponent implements OnInit {
  // public myteam = 'test team';
  // public Welcome = '';
  // public name = '';
  public team_members = [];
  public errorMsg;
  constructor(private _Teamservice: TeamService) {}

  ngOnInit() {
     this._Teamservice.getTeam()
       .subscribe(data => this.team_members = data,
                 error => this.errorMsg = error);
// onClick() {
//   // console.log('Contact to our team');
//   // this.Welcome = 'Welcome to our Team';
// }

}}



