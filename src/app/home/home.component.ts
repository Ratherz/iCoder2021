import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private http: HttpClient) { }
  title = 'iCoder2021';
  status = 'Y';
  result = 0;
  actionBarNumber1 = 0;
  actionBarNumber2 = 10;
  actionBarNumber3 = 200;

  students = [
    {
      name: 'Ratherz',
      status: 'Y'
    },
    {
      name: 'RatherzT',
      status: 'N'
    }
  ]

  date = new Date();
  bath = 12314324;
  power = 123345;

  dito$ = this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')

  pokemonNameFormControl = new FormControl();

  pokemon$ = this.pokemonNameFormControl.valueChanges.pipe(
    debounceTime(400),
    switchMap((pokemonName) => {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    })
  )

  ngOnInit(): void {
    this.sumResult();

  }
  sumResult(){
    this.result = this.actionBarNumber1+ this.actionBarNumber2 + this.actionBarNumber3;
  }
}
