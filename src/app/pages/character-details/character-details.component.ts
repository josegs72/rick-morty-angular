import { Component } from '@angular/core';
import { Icharacters } from 'src/app/models/icharacters';

import { ActivatedRoute } from '@angular/router';

import { characters } from 'src/app/models/characters.data';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  public id!: any;
  public character?: Icharacters;

  constructor(public route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => (this.id = params.get('id')));
    this.id = parseInt(this.id);
    this.character = this.characters.find((person) => person.id === this.id);
  }
  public characters: Icharacters[] = characters;
}
