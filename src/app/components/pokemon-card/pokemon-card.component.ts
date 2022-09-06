import { Component, Input} from '@angular/core';
import { Pokemon } from 'src/_model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
 @Input()
  public pokemon!: Pokemon;

  public leadingZero(srt: string | number, size: number = 3 ) : string {
    let s = String(srt);
    while (s.length < (size || 2))
    {
      s = '0' + s;
    }
    return s;
  }
}
