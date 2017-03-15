/**
 * Routes
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				31.01.2017				Created
 */

import { Landing } from './components/landing/landing.component';
import { Create } from './components/create/create.component';
import { View } from './components/view/view.component';
import { PageNotFound } from './components/pagenotfound/pagenotfound.component';
import { Authentification } from './services/authentification/authentification.service';

export const routes = [
	{ path: '', component: Landing, pathMatch: 'full' },
	{ path: 'view/:id', component: View, pathMatch: 'full' },
	{
		path: 'post',
		children: [
			{ path: '', redirectTo: 'new', pathMatch: 'full' },
			{ path: 'new', component: Create, canActivate: [Authentification] }
		]
	},
	{ path: '**', component: PageNotFound },
];
