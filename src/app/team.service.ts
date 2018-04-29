
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {MyTeam} from './Team';
import 'rxjs/add/observable/throw';
//  unclear
import {_catch} from 'rxjs/operator/catch';
import 'rxjs/add/operator/catch';
// unclear
@Injectable()
export class TeamService {
  private _url: string = 'http://127.0.0.1:8000/my_team/';
  constructor(private http: HttpClient) { }
  getTeam(): Observable<MyTeam[]> {
    return this.http.get<MyTeam[]>(this._url)
      .catch(this.errorHandler);
  }
  postTeam(data): Observable<MyTeam[]> {
    return this.http.post<MyTeam[]>(this._url, data );

  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server Error")
  }

}
