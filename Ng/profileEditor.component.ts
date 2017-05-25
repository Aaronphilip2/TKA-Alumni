import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from "./user";
import { UserService } from './user.service';

@Component ({
	moduleId: module.id,
	selector: 'profile-editor',
	styleUrls: ["../css/profileEditor.css"],
	template: `
		<div *ngIf="user" class="wrapper">
			<h3>{{user.firstName + " " + user.lastName}}</h3>
			
			<div *ngIf="!editMode">
				<p>Occupation: {{user.occupation}}</p>
				<p>Major: {{user.major}}</p>
				<p>College: {{user.college}}</p>
				<p>Degree: {{user.degree}}</p>
				<p>Specialization: {{user.specialization}}</p>
				<p>Email: {{user.email}}</p>
				<p>Phone Number: {{user.phone}}</p>
			</div>


			<div *ngIf="editMode">
				<input type="text" [(ngModel)]="user.occupation">
				<input type="text" [(ngModel)]="user.major">
				<input type="text" [(ngModel)]="user.college">
				<input type="text" [(ngModel)]="user.degree">
				<input type="text" [(ngModel)]="user.specialization">
				<input type="text" [(ngModel)]="user.email">
				<input type="text" [(ngModel)]="user.phone">
			</div>
			
			<button *ngIf="!editMode" (click)="edit()">Edit</button>
			<button *ngIf="editMode" (click)="save()">Save</button>
		</div>
	`,
	providers: [UserService]
})

export class ProfileEditorComponent implements OnInit{
	
	user: User;
	currentId: number = 2;
	editMode: boolean = false;

	constructor(
		private userService: UserService,
		private router: Router
	) {}

	ngOnInit() : void {
		this.userService.getUser(this.currentId)
	      .then(user => this.user = user);
	}
	
	edit() {
		this.editMode = true;
	}

	save(): void {
		this.editMode = false;
		this.userService.update(this.user)
	}
}