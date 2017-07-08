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
var common_1 = require('@angular/common');
var router_2 = require('@angular/router');
var user_service_1 = require('./user.service');
var UserProfileComponent = (function () {
    function UserProfileComponent(userService, route, location, router) {
        this.userService = userService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.userService.getUser(id)
                .then(function (user) { return _this.user = user; });
        });
    };
    UserProfileComponent.prototype.goToHome = function () {
        var link = ['/home'];
        this.router.navigate(link);
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "user-profile",
            styleUrls: ["../css/profile.css"],
            template: "\n\t\t<div class=\"profileWrapper\" *ngIf=\"user\">\n\t\t\t<img src=\"{{user.photo != null ? user.photo : '../images/noProfile.svg'}}\" [ngClass]=\"{'noProfile' : user.photo === null, 'userPhoto' : user.photo != null}\" >\n\t\t\t\n\t\t\t<p class=\"name\">{{user.firstName + \" \" + user.lastName}}</p>\n\t\t\t<p class=\"classification\">{{user.classification}}</p>\n\t\t\t<p *ngIf=\"!(user.classification === user.title)\" class=\"title\">{{user.title}}</p>\n\t\t\t\n\t\t\t<div class=\"info\">\n\t\t\t\t<p class=\"label\">occupation</p>\n\t\t\t\t<p class=\"data\">{{user.occupation}}</p>\n\t\t\t\t\n\t\t\t\t<p class=\"label\">degree</p>\n\t\t\t\t<p class=\"data\">{{user.degree}}</p>\n\n\t\t\t\t<p class=\"label\">major</p>\n\t\t\t\t<p class=\"data\">{{user.major}}</p>\n\n\t\t\t\t<p class=\"label\">specialization</p>\n\t\t\t\t<p class=\"data\">{{user.specialization}}</p>\n\n\t\t\t\t<p class=\"label\">college</p>\n\t\t\t\t<p class=\"data\">{{user.college}}</p>\n\n\t\t\t\t<p class=\"label\">email</p>\n\t\t\t\t<p class=\"data\">{{user.email}}</p>\n\n\t\t\t\t<p class=\"label\">phone</p>\n\t\t\t\t<p class=\"data\">{{user.phone}}</p>\n\n\t\t\t\t<p class=\"label\">location</p>\n\t\t\t\t<p class=\"data\">{{user.city + \", \" + user.state}}</p>\n\t\t\t</div>\n\t\t\t\n\t\t\t<p class=\"bio\">{{user.bio}}</p>\n\t\t</div>\n\t",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, common_1.Location, router_2.Router])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=userProfile.component.js.map