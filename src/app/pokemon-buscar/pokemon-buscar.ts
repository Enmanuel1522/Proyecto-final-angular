import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../services/pokemon-service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-buscar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-buscar.html',
  styleUrls: ['./pokemon-buscar.css']
})
export class PokemonBuscarComponent {

  pokemonName = '';
  pokemon: any = null;
  error = false;
  loading = false;

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
    { size: 55,  left: '4%',  right: undefined, top: '12%', duration: '4s',   delay: '0s'   },
    { size: 85,  left: '2%',  right: undefined, top: '42%', duration: '5.5s', delay: '0.7s' },
    { size: 50,  left: '18%', right: undefined, top: '70%', duration: '4.8s', delay: '1.3s' },
    { size: 38,  left: '30%', right: undefined, top: '85%', duration: '3.5s', delay: '0.9s' },
    { size: 100, left: undefined, right: '3%',  top: '8%',  duration: '6s',   delay: '0.4s' },
    { size: 60,  left: undefined, right: '12%', top: '52%', duration: '5s',   delay: '1s'   },
    { size: 42,  left: undefined, right: '22%', top: '76%', duration: '3.8s', delay: '1.8s' },
    { size: 35,  left: undefined, right: '5%',  top: '80%', duration: '4.2s', delay: '0.2s' },
  ];

  constructor(
    private pokemonService: PokemonService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  volver() {
    this.router.navigate(['/home']);
  }

  buscarPokemon() {
    if (!this.pokemonName.trim()) return;

    this.loading = true;
    this.error = false;
    this.pokemon = null;

    this.pokemonService.searchPokemon(this.pokemonName.toLowerCase().trim())
      .subscribe({
        next: (data: any) => {
          this.pokemon = data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.error = true;
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
  }
}