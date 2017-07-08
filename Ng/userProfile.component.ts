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
		<div class="profileWrapper" *ngIf="user">
			<img src="{{user.photo != null ? user.photo : '../images/noProfile.svg'}}" [ngClass]="{'noProfile' : user.photo === null, 'userPhoto' : user.photo != null}" >
			
			<p class="name">{{user.firstName + " " + user.lastName}}</p>
			<p class="classification">{{user.classification}}</p>
			<p *ngIf="!(user.classification === user.title)" class="title">{{user.title}}</p>
			
			<div class="info">
				<p class="label">occupation</p>
				<p class="data">{{user.occupation}}</p>
				
				<p class="label">degree</p>
				<p class="data">{{user.degree}}</p>

				<p class="label">major</p>
				<p class="data">{{user.major}}</p>

				<p class="label">specialization</p>
				<p class="data">{{user.specialization}}</p>

				<p class="label">college</p>
				<p class="data">{{user.college}}</p>

				<p class="label">email</p>
				<p class="data">{{user.email}}</p>

				<p class="label">phone</p>
				<p class="data">{{user.phone}}</p>

				<p class="label">location</p>
				<p class="data">{{user.city + ", " + user.state}}</p>
			</div>
			
			<p class="bio">{{user.bio}}</p>
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