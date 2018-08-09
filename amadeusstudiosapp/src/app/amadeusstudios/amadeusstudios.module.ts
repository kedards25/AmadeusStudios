import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AmadeusStudiosRouting } from './amadeusstudios.routing';
import { AmadeusstudiosComponent } from './amadeusstudios.component';


@NgModule({
  declarations: [
    AmadeusstudiosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AmadeusStudiosRouting,
    RouterModule,
    CommonModule
  ],
  providers: []
})
export class AmadeusStudiosModule { }
