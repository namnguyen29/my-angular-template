import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('@app-features/general/pages')).HomeComponent
  },
  {
    path: 'dish',
    loadComponent: async () => (await import('@app-features/general/pages')).DishComponent
  }
];
