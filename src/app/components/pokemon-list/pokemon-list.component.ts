import { Component} from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';
import { Pokemon } from 'src/_model/Pokemon';
import { Type } from 'src/_model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent{
  public pokemons: Pokemon[] = [
  ];
  constructor(
    public pokemonService: PokemonService,
    ){
  }
}




