import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRandom } from './pokemon-random';

describe('PokemonRandom', () => {
  let component: PokemonRandom;
  let fixture: ComponentFixture<PokemonRandom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonRandom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonRandom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
