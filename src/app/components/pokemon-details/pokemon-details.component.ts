import { Component} from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';
import { Pokemon } from 'src/_model/Pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent{
  public pokemons: Pokemon[] = [

  ];
  constructor(
    public pokemonService: PokemonService,
    ){
  }
}
