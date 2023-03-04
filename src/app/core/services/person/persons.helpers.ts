import { Persons } from './persons.model';
import { ApiPersons } from './api/api-persons.models';


export function transformPerson(apiPersons: ApiPersons): Persons {
    delete apiPersons.createdAt;
    return apiPersons;
}