import { Personajes } from '../../../core/services/personajes/personajes.model';

import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent {


  @Input() public personaje? : Personajes;
  @Output() onRemove: EventEmitter<void> = new EventEmitter<void>();


  public removePersonaje() {
    this.onRemove.emit()
  }

}