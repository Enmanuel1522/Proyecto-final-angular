import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  // Esto genera Pokemon aleatorio
  getRandomPokemon() {

    const randomId = Math.floor(Math.random() * 151) + 1;

    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
  }

  // Listar de los tipos
  getTypes() {

    return this.http.get(
      'https://pokeapi.co/api/v2/type'
    );
  }

  getPokemonByType(type:string){
  return this.http.get(`https://pokeapi.co/api/v2/type/${type}`);
}

  // Buscar Pokemon por nombre
  searchPokemon(name: string) {

    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }

}