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
var ProfileListComponent = (function () {
    function ProfileListComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ProfileListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .then(function (users) { return _this.users = users; });
    };
    ProfileListComponent.prototype.goToUser = function (user) {
        var link = ['/profile', user.id];
        this.router.navigate(link);
    };
    ProfileListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "profile-list",
            styleUrls: ["../css/profileList.css"],
            template: "\n\t\t<ul class=\"users\">\n\t\t\t<li *ngFor=\"let user of users\" (click)=\"goToUser(user)\">\n\t\t\t\t<img src=\"../images/noProfile.svg\" class=\"noProfile\" *ngIf=\"user.photo === null\">\n\t\t\t\t{{user.firstName + \" \" + user.lastName}}\n\t\t\t</li>\n\t\t</ul>\n\t",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], ProfileListComponent);
    return ProfileListComponent;
}());
exports.ProfileListComponent = ProfileListComponent;
//# sourceMappingURL=profileList.component.js.map