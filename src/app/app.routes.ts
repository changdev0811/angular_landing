import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home/demos', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: './views/home/home.module#HomeModule'
  },
  { 
    path: '**', 
    redirectTo: 'home/one'
  }
];

