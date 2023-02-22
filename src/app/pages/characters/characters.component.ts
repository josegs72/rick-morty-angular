import { ApiService } from 'src/app/core/services/products/api/api-characters.service';
import { ApiCharacters} from 'src/app/core/services/products/api/api-characters.models';
import { Component, OnInit,Input  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit{
  public characters: ApiCharacters[]=[];



  constructor(private characterService :ApiService ,private router: Router) {} 

  public ngOnInit(): void {
    this.characterService.getApiCharacters().subscribe((charactersFromApi) =>{

      this.characters = charactersFromApi;
    });
  }
  
}