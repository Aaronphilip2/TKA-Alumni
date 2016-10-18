import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  template:`
  	<div class="header">
  		<h1 class="title">TKA Alumni</h1>
  		<input class="search" type="text" placeholder="Search">
  	</div>
  	<router-outlet></router-outlet>
  `,
  styleUrls: ['../css/app.css']
})
export class AppComponent { 
	
}