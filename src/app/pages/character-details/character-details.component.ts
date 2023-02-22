import { Component } from '@angular/core';
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
  public character?: ApiCharacters;

  constructor(
    public activatedRoute: ActivatedRoute,
    public ApiService: ApiService
  ) {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.ApiService.getApiCharacters().subscribe((character) => {
        this.character = character.find((c) => c.id == params['id']);
        console.log(this.character);
      });
    });
  }
}
