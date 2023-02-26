import { Person } from './../../../../core/services/products/character.models';

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/products/api/api-characters.service';
import { ApiCharacters} from 'src/app/core/services/products/api/api-characters.models';

@Component({
  selector: 'app-character',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  @Input() public characters?: Person;
  

  constructor(private router: Router) {}

 



  public navigateToDetail() {
    if (this.characters) {
      this.router.navigate(['characters-detail', this.characters.id]);
    }
  }
}
