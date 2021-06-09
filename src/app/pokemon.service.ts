import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse } from './pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonByName(pokemonName: string){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  }

  getPokemonByAll(){
    return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
  }
}
