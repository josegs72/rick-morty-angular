import { Person } from '../../core/services/products/character.models';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(value: Person[] | null, name : string = '' ): Person[] {
        if (!value) { return [];}
        if (!name) { return value; }
        
        return value.filter((character) => {
            return character.name.includes(name);
            
        });
    }
}



  


