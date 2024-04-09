import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LargeDogsComponent } from './large-dogs/large-dogs.component';
import { SmallDogsComponent } from './small-dogs/small-dogs.component';

@NgModule({
  declarations: [
    AppComponent,
    LargeDogsComponent,
    SmallDogsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
