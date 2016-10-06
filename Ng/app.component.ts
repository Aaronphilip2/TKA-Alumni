import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  template:`
  	<div class="header">
  		<h1 class="title">TKA Alumni</h1>
  		<a routerLink="/home" class="home">Home</a>
  	</div>
  	<router-outlet></router-outlet>
  `,
  styleUrls: ['../css/app.css']
})
export class AppComponent { 
	
}