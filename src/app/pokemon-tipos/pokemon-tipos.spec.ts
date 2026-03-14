import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTipos } from './pokemon-tipos';

describe('PokemonTipos', () => {
  let component: PokemonTipos;
  let fixture: ComponentFixture<PokemonTipos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTipos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTipos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
