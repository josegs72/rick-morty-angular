
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { MessageService } from 'src/app/core/services/messages/message.service';
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
  public formMessage: string = '';
  

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
  
   
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
    this.messageService.setMessage('El personaje se a creado con exito');
    this.formMessage = this.messageService.getMessage();
    this.personForm?.reset();
    setTimeout(() => {
      this.messageService.setMessage('');
      this.formMessage = this.messageService.getMessage();
      this.urlImg = ''
    }, 3000)
  
    
   
  
   
    
  }

 
  public ngOnInit() {
    this.personForm?.get('avatar')?.valueChanges.subscribe((value) => {
    
      if (!value) {return;}
     
      this.urlImg = value;
      
    })
  }
  
}

  

  