import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'proyectos/:slug',
    loadComponent: () =>
      import('./pages/project-detail/project-detail').then((m) => m.ProjectDetail),
  },
  {
    path: 'habilidades',
    loadComponent: () =>
      import('./pages/skills/skills').then((m) => m.Skills),
  },
  {
    path: 'sobre-mi',
    loadComponent: () =>
      import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
