import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import * as api from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: api.BASE_PATH,
    useFactory: () => 'token'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
