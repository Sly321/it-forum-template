/**
 * Routes
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				31.01.2017				Created
 */

import { Landing } from './components/landing/landing.component';
// import { Login } from './components/login/login.component';
// import { Overview } from './components/overview/overview.component';
// import { Shell } from './components/shell/shell.component';
import { Authentification } from './services/authentification/authentification.service';

export const routes = [
	{ path: '', component: Landing, pathMatch: 'full' }, /*
	{ path: 'login', component: Login },
	{
		path: 'home', component: Home, canActivate: [Authentification],
		children: [
			{ path: '', redirectTo: 'overview', pathMatch: 'full' },
			{ path: 'overview', component: Overview },
			{ path: 'shell', component: Shell }
		]
	},*/
	{ path: '**', component: Landing, canActivate: [Authentification] },
];
