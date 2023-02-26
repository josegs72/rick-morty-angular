import { CharactersService } from './../../core/services/products/character.service';
import { Person } from './../../core/services/products/character.models';
import { Component,OnInit} from '@angular/core';
import { ApiCharacters } from 'src/app/core/services/products/api/api-characters.models';
import { ApiService } from 'src/app/core/services/products/api/api-characters.service';
import { ActivatedRoute } from '@angular/router';

//import { characters } from 'src/app/models/characters.data';

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
