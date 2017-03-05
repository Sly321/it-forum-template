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

/** Services */
import { Authentification } from './services/authentification/authentification.service';

/** Routes */
import { routes } from './app.routes';

@NgModule({
	imports: [FormsModule, HttpModule, BrowserModule, RouterModule.forRoot(routes)],
	declarations: [Wrapper, Landing, Header],
	bootstrap: [Wrapper],
	providers: [Authentification, ...AUTH_PROVIDERS]
})
export class AppModule { }
