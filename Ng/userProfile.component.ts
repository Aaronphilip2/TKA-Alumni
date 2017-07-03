import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import { User } from "./user"
import { UserService } from './user.service'

@Component({
	moduleId: module.id,
	selector: "user-profile",
	styleUrls: ["../css/profile.css"],
	template: `
		<div *ngIf="user">
			<img src="{{user.photo != null ? user.photo : '../images/noProfile.svg'}}" [ngClass]="{'noProfile' : user.photo === null, 'userPhoto' : user.photo != null}" >
			<p class="name">{{user.firstName + " " + user.lastName}}</p>
		</div>
	`,
	providers: [UserService]
})

export class UserProfileComponent implements OnInit {

	user: User;

 	constructor(
	  private userService: UserService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private router: Router
	) {}

	ngOnInit(): void {
	  this.route.params.forEach((params: Params) => {
	    let id = +params['id'];
	    this.userService.getUser(id)
	      .then(user => this.user = user);
	  });
	}

	goToHome() {
		let link = ['/home'];
		this.router.navigate(link);
	}
}