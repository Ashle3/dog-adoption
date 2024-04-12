import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LargeDogsComponent } from './large-dogs/large-dogs.component';
import { SmallDogsComponent } from './small-dogs/small-dogs.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SmallListComponent } from './small-dogs/small-list/small-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SmallDogEditComponent } from './small-dogs/small-dog-edit/small-dog-edit.component';
import { SmallDogDetailComponent } from './small-dogs/small-dog-detail/small-dog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LargeDogsComponent,
    SmallDogsComponent,
    HeaderComponent,
    SmallListComponent,
    SmallDogEditComponent,
    SmallDogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
