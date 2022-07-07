import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ComponentLibraryModule} from '../../../cop-angular-components/projects/component-library/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentLibraryModule
  ],
  providers: [
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
