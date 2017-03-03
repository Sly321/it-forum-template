import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Components */
import { Landing } from './components/landing/landing.component';
import { AppComponent } from './components/app.component';

/** Services */
// TODO

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, Landing],
	bootstrap: [AppComponent]
})
export class AppModule { }
