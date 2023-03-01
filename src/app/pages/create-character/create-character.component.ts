import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { Person } from 'src/app/core/services/products/character.models';
import { CharactersService } from 'src/app/core/services/products/character.service';


@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss'],
})
export class CreateCharacterComponent /*implements OnInit*/ {
  public productForm?: FormGroup;
  public urlImg: string = '';
  public canEdit: boolean = false;
  public characterId?: string;
  

  constructor(
    private fb: FormBuilder,
  
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService,
    private router: Router
  ) {
    this.activatedRoute.queryParams
      .pipe(
        map((queryParams) => queryParams['id']),
        switchMap((id: string) => {
          if (!id) {
            
            return of(undefined);
          } else {
            this.characterId = id;
            return this.characterService.getCharactersDetail(id);
          }
        })
      )
      .subscribe((character?: Person) => {
        this.canEdit = !!character;
        this.createNewForm(character);
      });
  }

 /* public ngOnInit() {
    this.productForm?.get('image')?.valueChanges.subscribe((value) => {
      if (!value) {
        return;
      }
      this.urlImg = value;
      this.messageService.setMessage(value);
    });
  

    this.productForm?.get('image')?.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }
  */
  public createNewForm(character?: Person) {
    this.productForm = this.fb.group({
      name: new FormControl(character?.name || '', [Validators.required]),
      color: new FormControl(character?.gender|| '', [Validators.required]),
      price: new FormControl(character?.type || '', [
        Validators.required,
        Validators.maxLength(6),
      ]),
      description: new FormControl(character?.status || '', [
        Validators.required,
      ]),
      image: new FormControl(character?.image || '', [Validators.required]),
      
    });
  }

}
