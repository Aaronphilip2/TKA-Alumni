import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { ProfileListComponent } from './profileList.component';
import { UserProfileComponent } from './userProfile.component';
import { ProfileEditorComponent } from './profileEditor.component'
import { routing } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [ 
  	AppComponent, 
  	ProfileListComponent,
  	UserProfileComponent,
    ProfileEditorComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }