import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Bienvenido al Estadio Pokémon</h1>
    <button (click)="logout()">Cerrar Sesión</button>
  `
})
export class HomeComponent {

  logout() {
    localStorage.removeItem('trainer');
    window.location.href = '/login';
  }
}