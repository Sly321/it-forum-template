import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Components */
import { AppComponent }  from './components/app.component';

/** Services */
// TODO

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
