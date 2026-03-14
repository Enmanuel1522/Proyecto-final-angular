import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBuscar } from './pokemon-buscar';

describe('PokemonBuscar', () => {
  let component: PokemonBuscar;
  let fixture: ComponentFixture<PokemonBuscar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonBuscar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonBuscar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
