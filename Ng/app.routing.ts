import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileListComponent } from './profileList.component';
import { UserProfileComponent } from './userProfile.component';
import { ProfileEditorComponent } from './profileEditor.component';

const appRoutes: Routes = [
	{
		path: 'home',
		component: ProfileListComponent
	},
	{
		path: 'editor',
		component: ProfileEditorComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'profile/:id',
		component: UserProfileComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
