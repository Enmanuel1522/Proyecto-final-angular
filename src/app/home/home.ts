import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  userName = 'ASH KETCHUM';
  menuOpen = false;

menuItems = [
  { 
    icon: 'search',
    title: 'BUSCAR',
    description: 'BUSCA UN POKÉMON POR NOMBRE O NÚMERO',
    route: '/buscar'
  },

  { 
    icon: 'shuffle',
    title: 'ALEATORIO',
    description: 'DESCUBRE UN POKÉMON AL AZAR',
    route: '/random'
  },

  { 
    icon: 'layers',
    title: 'TIPOS',
    description: 'EXPLORA LOS TIPOS DE POKÉMON',
    route: '/tipos'
  }
];

//Las particulas 
  particles = [
    { x: '10%', y: '20%', delay: '0s'   },
    { x: '85%', y: '35%', delay: '0.5s' },
    { x: '20%', y: '75%', delay: '1s'   },
    { x: '75%', y: '80%', delay: '1.5s' },
    { x: '50%', y: '10%', delay: '2s'   },
    { x: '30%', y: '50%', delay: '0.7s' },
    { x: '65%', y: '25%', delay: '1.3s' },
    { x: '90%', y: '65%', delay: '0.4s' },
  ];

  bgPokeballs = [
    // Izquierda
    { size: 55,  left: '4%',  right: undefined, top: '12%', duration: '4s',   delay: '0s'   },
    { size: 90,  left: '2%',  right: undefined, top: '40%', duration: '5.5s', delay: '0.7s' },
    { size: 60,  left: '16%', right: undefined, top: '68%', duration: '4.8s', delay: '1.3s' },
    { size: 40,  left: '28%', right: undefined, top: '82%', duration: '3.5s', delay: '0.9s' },
    // Derecha
    { size: 100, left: undefined, right: '3%',  top: '8%',  duration: '6s',   delay: '0.4s' },
    { size: 65,  left: undefined, right: '12%', top: '50%', duration: '5s',   delay: '1s'   },
    { size: 45,  left: undefined, right: '20%', top: '74%', duration: '3.8s', delay: '1.8s' },
    { size: 38,  left: undefined, right: '5%',  top: '78%', duration: '4.2s', delay: '0.2s' },
  ];

  constructor(private router: Router) {}

  goTo(route: string) {
  this.router.navigate([route]);
}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    localStorage.removeItem('trainer');
    window.location.href = '/login';
  }


// Para controlar las ventanas modales
activeWindow: string | null = null;

openWindow(name: string) {
  this.activeWindow = name;
}

closeWindow() {
  this.activeWindow = null;
}


}


