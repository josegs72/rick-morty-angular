import { CharactersService } from './../../core/services/products/character.service';
import { Person } from './../../core/services/products/character.models';
import { Component,OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  public character?: Person;

  constructor(
    public activatedRoute: ActivatedRoute,
    public charactersService: CharactersService,
  ) {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
   
    });
  }
  

 
ngOnInit(): void {
  this.activatedRoute.params.subscribe((params) => {
    this.charactersService.getCharacters().subscribe((character) => {
      this.character = character.find((c) => c.id == params['id']);
      
    });
  });


  
  

  

  }
}
