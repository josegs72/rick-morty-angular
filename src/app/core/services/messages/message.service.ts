import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

 
  public message: string = ' ';

  constructor() { }

  public getMessage() {
    return this.message;
  }
  
  public setMessage(value: string) {
    this.message = value
  }
}
