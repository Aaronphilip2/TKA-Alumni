"use strict";
var router_1 = require('@angular/router');
var profileList_component_1 = require('./profileList.component');
var userProfile_component_1 = require('./userProfile.component');
var appRoutes = [
    {
        path: 'home',
        component: profileList_component_1.ProfileListComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'profile/:id',
        component: userProfile_component_1.UserProfileComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map