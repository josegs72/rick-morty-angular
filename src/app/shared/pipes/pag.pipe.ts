import { Person } from '../../core/services/products/character.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform(data: Person[], page: number = 1, pageSize: number = 10): any[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return data.slice(startIndex, endIndex);
  }
}
