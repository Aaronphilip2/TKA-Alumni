"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var ProfileEditorComponent = (function () {
    function ProfileEditorComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.currentId = 2;
        this.editMode = false;
    }
    ProfileEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser(this.currentId)
            .then(function (user) { return _this.user = user; });
    };
    ProfileEditorComponent.prototype.edit = function () {
        this.editMode = true;
    };
    ProfileEditorComponent.prototype.save = function () {
        this.editMode = false;
        this.userService.update(this.user);
    };
    ProfileEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile-editor',
            styleUrls: ["../css/profileEditor.css"],
            template: "\n\t\t<div *ngIf=\"user\" class=\"wrapper\">\n\t\t\t<h3>{{user.firstName + \" \" + user.lastName}}</h3>\n\t\t\t\n\t\t\t<div *ngIf=\"!editMode\">\n\t\t\t\t<p>Occupation: {{user.occupation}}</p>\n\t\t\t\t<p>Major: {{user.major}}</p>\n\t\t\t\t<p>College: {{user.college}}</p>\n\t\t\t\t<p>Degree: {{user.degree}}</p>\n\t\t\t\t<p>Specialization: {{user.specialization}}</p>\n\t\t\t\t<p>Email: {{user.email}}</p>\n\t\t\t\t<p>Phone Number: {{user.phone}}</p>\n\t\t\t</div>\n\n\n\t\t\t<div *ngIf=\"editMode\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"user.occupation\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"user.major\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"user.college\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"user.degree\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"user.specialization\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"user.email\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"user.phone\">\n\t\t\t</div>\n\t\t\t\n\t\t\t<button *ngIf=\"!editMode\" (click)=\"edit()\">Edit</button>\n\t\t\t<button *ngIf=\"editMode\" (click)=\"save()\">Save</button>\n\t\t</div>\n\t",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], ProfileEditorComponent);
    return ProfileEditorComponent;
}());
exports.ProfileEditorComponent = ProfileEditorComponent;
//# sourceMappingURL=profileEditor.component.js.map