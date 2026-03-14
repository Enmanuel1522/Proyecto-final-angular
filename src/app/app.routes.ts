import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';


export const routes: Routes = [

  {
    path: 'login',
    loadComponent: () => import('./pokemon-login/pokemon-login')
      .then(m => m.PokemonLoginComponent)
  },

//Ruta del home
  {
    path: 'home',
    loadComponent: () => import('./home/home')
      .then(m => m.HomeComponent),
    canActivate: [AuthGuard],
  },

//Ruta del pokemon random
    {
  path: 'random',
  loadComponent: () => import('./pokemon-random/pokemon-random')
    .then(m => m.PokemonRandomComponent),
    canActivate:[AuthGuard]
},

//Ruta de buscar pokemon
{
  path: 'buscar',
  loadComponent: () =>
    import('./pokemon-buscar/pokemon-buscar')
      .then(m => m.PokemonBuscarComponent),
  canActivate:[AuthGuard]
},

//Ruta de tipos de pokemon
{
  path: 'tipos',
  loadComponent: () => import('./pokemon-tipos/pokemon-tipos')
  .then(m => m.PokemonTiposComponent),
  canActivate: [AuthGuard]
},


  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


];
