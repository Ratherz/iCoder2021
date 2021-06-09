import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonService } from '../pokemon.service';
import { Pokemon, PokemonData, PokemonResponse } from '../pokemon/pokemon';

@Component({
  selector: 'app-pokemongo',
  templateUrl: './pokemongo.component.html',
  styleUrls: ['./pokemongo.component.css']
})
export class PokemongoComponent implements OnInit {
  cities: any[] = [];
  pokemonDataList: PokemonData[] = [];
  cityFormControl = new FormControl();
  image_sprites: string[] = [];

  abilities: string[]  = [];
  pokemonFormControl = new FormControl();
  nest_pokemon$ = this.http.get('/training-demo/pokemon/all/');

  constructor(private http: HttpClient , private pokemonService: PokemonService) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    // this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    this.pokemonService.getPokemonByAll()
    .subscribe(response => {
      this.pokemonDataList = response.results;
    })
  }

  ngOnInit(): void {
  }

  selectPokemon(event: {originalEvent: any , value: PokemonData}){
   const pokemon = event.value;

   if(pokemon){
     this.http.get<Pokemon>(pokemon.url)
      .subscribe((response) => {
        this.abilities = response.abilities.map(abi => abi.ability.name)
        // this.pokemonUrl = response.sprites.front_default;
        // this.sprites = response.sprites;
        this.image_sprites = Object.keys(response.sprites)
        .filter(sprite => sprite.startsWith('back') || sprite.startsWith('front'))
        .filter(sprite => (response.sprites as any)[sprite]!== null)
        .map(sprite =>(response.sprites as any)[sprite])
      })
   }else {
     this.image_sprites = [];
     this.abilities = [];
   }
  }

  savePokemon(){
    const pokemon = this.pokemonFormControl.value;
    const payload: {name?:string} = {};
    payload.name = pokemon.name;
    console.log(pokemon)
    this.nest_pokemon$.subscribe(response =>console.log(response))
  }

}
