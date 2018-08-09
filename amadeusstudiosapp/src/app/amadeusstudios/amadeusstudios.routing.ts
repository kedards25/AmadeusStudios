import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmadeusstudiosComponent } from './amadeusstudios.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'ams', component: AmadeusstudiosComponent, children: [
      { path: '', redirectTo: 'header', pathMatch: 'full' },
      { path: '', component: HeaderComponent },

      { path: '**', redirectTo: 'header', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'ams' }
];

export const AmadeusStudiosRouting: ModuleWithProviders = RouterModule.forRoot(routes);
