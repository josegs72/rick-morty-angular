import { Icharacters } from './../../models/icharacters';

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { characters } from 'src/app/models/characters.data';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  public characters = characters;

  constructor(private router: Router) {}
}
