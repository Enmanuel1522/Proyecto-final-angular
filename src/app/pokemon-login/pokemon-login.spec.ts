import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLogin } from './pokemon-login';

describe('PokemonLogin', () => {
  let component: PokemonLogin;
  let fixture: ComponentFixture<PokemonLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
