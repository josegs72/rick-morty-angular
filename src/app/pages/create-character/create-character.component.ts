
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { PersonajesService } from 'src/app/core/services/personajes/personajes.service';

import { PersonsService } from 'src/app/core/services/person/persons.service';


@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss'],
})
export class CreatePersonComponent implements OnInit {
  public personForm?: FormGroup;
  public urlImg: string = '';
  public isPersonCreated: boolean = false;
  

  constructor(
    private fb: FormBuilder,
  
    private activatedRoute: ActivatedRoute,
    private personsService: PersonsService,
    private personajesService: PersonajesService,
  ) {
    
    this.personForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]*')]),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]*')]),
      avatar: new FormControl('', [Validators.required]),
      
    })
  }

 
  savePersonaje() {
    this.personajesService.createPersonaje(this.personForm?.value).subscribe();
    this.personsService.createPerson(this.personForm?.value).subscribe();
    this.isPersonCreated = true;
    //mandamos mensaje informativo
  
    
    this.personForm?.reset();
  
   
    
  }

 
  public ngOnInit() {
    this.personForm?.get('avatar')?.valueChanges.subscribe((value) => {
      //si no hay valor devuelve vacio
      if (!value) {return;}
      //si hay valor la variable URLIMG coge ese valor
      this.urlImg = value;
      
    })
  }
  
}

  

  