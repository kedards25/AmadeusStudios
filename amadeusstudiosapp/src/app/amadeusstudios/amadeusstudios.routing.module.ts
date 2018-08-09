import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmadeusstudiosComponent } from './amadeusstudios.component';

const routes: Routes = [
  {
    path: 'ams', component: AmadeusstudiosComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'ams' }
];

export const amadeusstudiosRouting: ModuleWithProviders = RouterModule.forRoot(routes);
