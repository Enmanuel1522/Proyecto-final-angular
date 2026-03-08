import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: 'login',
    loadComponent: () => import('./pokemon-login/pokemon-login')
      .then(m => m.PokemonLoginComponent)
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home')
      .then(m => m.HomeComponent),
    canActivate: [AuthGuard]
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];
