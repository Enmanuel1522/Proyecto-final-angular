import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonLoginComponent } from "./pokemon-login/pokemon-login";
import { HomeComponent } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonLoginComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proyecto_Final_Angular');
}
