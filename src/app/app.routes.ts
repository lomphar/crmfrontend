import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { authGuard } from './core/auth/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () =>
     import('./features/dashboard/dashboard.routes').then(m => m.routes),
    canActivate: [authGuard] 
  },
  {
    path: '**',
    redirectTo: ''
  }
];
