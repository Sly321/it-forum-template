/** Angular Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

/** Components */
import { Wrapper } from './components/wrapper/wrapper.component';
import { Landing } from './components/landing/landing.component';
import { Header } from './components/header/header.component';

/** Third Party Angular */
import '../node_modules/rxjs/add/operator/toPromise';

/** Services */
// TODO

/** Routes */
import { routes } from './app.routes';

@NgModule({
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	declarations: [Wrapper, Landing, Header],
	bootstrap: [Wrapper]
})
export class AppModule { }
