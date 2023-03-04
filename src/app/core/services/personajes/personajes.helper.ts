import { personajes } from './personajes.model';
import { ApiPersonajes } from './api/api-personajes.model';


export function transformPersonaje(apiPersonajes: ApiPersonajes): personajes {
    delete apiPersonajes.createdAt;
    return apiPersonajes;
}