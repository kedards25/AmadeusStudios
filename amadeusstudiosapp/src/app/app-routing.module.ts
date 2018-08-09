import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ams', pathMatch: 'full' },
  { path: '**', redirectTo: 'ams' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
