/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

/** Components */
import { Wrapper } from './components/wrapper/wrapper.component';
import { Landing } from './components/landing/landing.component';
import { Header } from './components/header/header.component';

/** Third Party Angular */
import { AUTH_PROVIDERS } from 'angular2-jwt';
import '../node_modules/rxjs/add/operator/toPromise';
// import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

/** Services */
import { Authentification } from './services/authentification/authentification.service';

/** Routes */
import { routes } from './app.routes';

/** Firebase */
import './resources/lib/firebase/firebase.js';
declare const firebase: any;

/** Firebase Config */
const firebaseConfig = {
	apiKey: 'AIzaSyCPs0KVu3tGNUeYx8xJ9530YVRPBcPD_Yc',
	authDomain: 'from-below.firebaseapp.com',
	databaseURL: 'https://from-below.firebaseio.com',
	storageBucket: 'from-below.appspot.com',
	messagingSenderId: '207279241584'
};

firebase.initializeApp(firebaseConfig);


@NgModule({
	imports: [FormsModule, HttpModule, BrowserModule, RouterModule.forRoot(routes)],
	// AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)],
	declarations: [Wrapper, Landing, Header],
	bootstrap: [Wrapper],
	providers: [Authentification, ...AUTH_PROVIDERS]
})
export class AppModule { }
