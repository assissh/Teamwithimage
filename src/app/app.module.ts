import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import {TeamService} from './team.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingcomponenets} from './app-routing.module';
import { TeamCreateComponent } from './team-create/team-create.component';



@NgModule({
  declarations: [
    AppComponent,
   routingcomponenets,
   TeamCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
