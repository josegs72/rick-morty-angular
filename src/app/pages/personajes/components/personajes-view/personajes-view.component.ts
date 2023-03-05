import { ApiPersonajes } from '../../../../core/services/personajes/api/api-personajes.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personajes-view',
  templateUrl: './personajes-view.component.html',
  styleUrls: ['./personajes-view.component.scss']
})
export class PersonajesViewComponent {


  @Input() public personaje?: ApiPersonajes;
 
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();
 
  @Output() public onSend: EventEmitter<void> = new EventEmitter<void>();

  public removePersonajes() {
    this.onRemove.emit()
  }

  public sendPersonajes() {
    this.onSend.emit()
  }

}
