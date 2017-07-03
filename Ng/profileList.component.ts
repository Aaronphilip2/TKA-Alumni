import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
	moduleId: module.id,
	selector: "profile-list",
	styleUrls: ["../css/profileList.css"],
	template: `
		<ul class="users">
			<li *ngFor="let user of users" (click)="goToUser(user)">
				<img src="{{user.photo != null ? user.photo : '../images/noProfile.svg'}}" [ngClass]="{'noProfile' : user.photo === null, 'userPhoto' : user.photo != null}" >
				<p class="name">{{user.firstName + " " + user.lastName}}</p>
				<p class="classification">{{user.classification}}</p>
			</li>
		</ul>
	`,
	providers: [ UserService ]
	
})



export class ProfileListComponent implements OnInit {
	constructor(
		private userService: UserService,
		private router: Router) {}

	users: User[];
	
	ngOnInit(): void {
		this.userService.getUsers()
			.then(users => this.users = users);
	}
	
	goToUser(user: User): void {
		let link = ['/profile', user.id];
		this.router.navigate(link);
	}
}

