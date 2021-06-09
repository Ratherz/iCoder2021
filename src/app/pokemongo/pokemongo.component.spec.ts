import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemongoComponent } from './pokemongo.component';

describe('PokemongoComponent', () => {
  let component: PokemongoComponent;
  let fixture: ComponentFixture<PokemongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemongoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
