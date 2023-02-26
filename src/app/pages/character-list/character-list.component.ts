import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Person } from 'src/app/core/services/products/character.models';
import {CharactersService} from 'src/app/core/services/products/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  public characters$?: Observable<Person[]>;
  public characterName: string = '';


  constructor(private charactersService: CharactersService ) { }

  public ngOnInit(): void {
    this.characters$= this.charactersService.getCharacters();
  }

}


