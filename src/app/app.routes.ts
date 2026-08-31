import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'como-funciona', loadComponent: () => import('./pages/how-it-works/how-it-works').then(m => m.HowItWorks) },
  { path: 'faqs', loadComponent: () => import('./pages/faqs/faqs').then(m => m.Faqs) }
];