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
			<h3>{{user.firstName + " " + user.lastName}}</h3>
			<h3>Occupation: {{user.occupation}}</h3>
			<h3>Major: {{user.major}}</h3>
			<h3>College: {{user.college}}</h3>
			<h3>Degree: {{user.degree}}</h3>
			<h3>Specialization: {{user.specialization}}</h3>
			<h3>Email: {{user.email}}</h3>
			<h3>Phone Number: {{user.phone}}</h3>
			<button (click)="goToHome()">Home</button>
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