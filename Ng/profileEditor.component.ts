import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from "./user";
import { UserService } from './user.service';

@Component ({
	moduleId: module.id,
	selector: 'profile-editor',
	styleUrls: ["../css/profileEditor.css"],
	template: `
		<div class="wrapper">
			<h3 *ngIf="user">{{user.firstName + " " + user.lastName}}</h3>
		</div>
	`,
	providers: [UserService]
})

export class ProfileEditorComponent implements OnInit{
	
	user: User;
	currentId: number = 2;

	constructor(
		private userService: UserService,
		private router: Router
	) {}

	ngOnInit() : void {
		this.userService.getUser(this.currentId)
	      .then(user => this.user = user);
	}
	
}