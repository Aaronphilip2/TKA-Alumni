import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  template:`
  	<div class="header">
  		<h1 class="title">TKA Alumni</h1>
  		<input class="search" type="text" placeholder="Search">
      <i class="fa fa-cog fa-2x gear" aria-hidden="true"  (click)="clicked = !clicked"></i>
  	  <div class="settings" *ngIf="clicked">
        <a (click)="clicked = !clicked" routerLink="/editor" routerLinkActive="active">Profile</a>
        <a (click)="clicked = !clicked">Logout</a>
      </div>
    </div>
  	<router-outlet></router-outlet>
  `,
  styleUrls: ['../css/app.css']
})
export class AppComponent { 
	
}