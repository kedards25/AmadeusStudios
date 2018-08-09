import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { AmadeusStudiosModule } from './amadeusstudios/amadeusstudios.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    AmadeusStudiosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
