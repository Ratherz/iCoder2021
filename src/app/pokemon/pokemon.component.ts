import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon, PokemonData, PokemonResponse, Sprites } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonUrl: string = ' ';
  pokemonDataList: PokemonData[] = [];
  pokemonpicUrl = [];

  // sprites: Sprites|null = null;

  image_sprites: string[] = [];

  constructor(private http: HttpClient, private pokemonService: PokemonService) {
    // this.http.get<any>('https://pokeapi.co/api/v2/pokemon/pikachu')
    //   .subscribe((response => { this.pokemonUrl = response.sprites.front_default;
    //  })
    // )

    this.pokemonService.getPokemonByName('pikachu')
      .subscribe(response => { this.pokemonUrl = response.sprites.front_default; })

    this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
      .subscribe(response => {
        this.pokemonDataList = response.results;
      })
  }

  ngOnInit(): void {
  }

  movement(el: HTMLElement) {
    el.animate({ transform: 'translateX(100px)' }, { duration: 1000 })

  }
  searchImg(url: string) {
    const imgurl = url.split('/');
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + imgurl[6] + ".png"
  }

  ShowPokemon(pokemon: PokemonData) {
    this.http.get<Pokemon>(pokemon.url)
      .subscribe((response) => {
        this.pokemonUrl = response.sprites.front_default;
        // this.sprites = response.sprites;
        this.image_sprites = Object.keys(response.sprites)
          .filter(sprite => sprite.startsWith('back') || sprite.startsWith('front'))
          .filter(sprite => (response.sprites as any)[sprite] !== null)
          .map(sprite => (response.sprites as any)[sprite])
      })
  }
}
