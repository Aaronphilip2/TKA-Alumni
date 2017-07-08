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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t<div class=\"header\" [ngClass]=\"{'expand': expand}\">\n  \t\t<div class=\"headerWrapper\">\n        <h1 class=\"title\">TKA Alumni</h1>\n        <input class=\"search\" type=\"text\" placeholder=\"Search\">\n        <button (click)=\"expand = !expand\" class=\"advSearch\">advanced search</button>\n        <i class=\"fa fa-cog fa-2x gear\" aria-hidden=\"true\"  (click)=\"clicked = !clicked\"></i>\n    \t  <div class=\"settings\" *ngIf=\"clicked\">\n          <a (click)=\"clicked = !clicked\" routerLink=\"/editor\" routerLinkActive=\"active\">Profile</a>\n          <a (click)=\"clicked = !clicked\">Logout</a>\n        </div>\n      </div>\n    </div>\n  \t<router-outlet></router-outlet>\n  ",
            styleUrls: ['../css/app.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map