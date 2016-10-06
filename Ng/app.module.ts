import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { ProfileListComponent } from './profileList.component';
import { UserProfileComponent } from './userProfile.component';
import { routing } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [ 
  	AppComponent, 
  	ProfileListComponent,
  	UserProfileComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }