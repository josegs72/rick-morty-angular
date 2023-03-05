import { Personajes } from './personajes.model';
import { ApiPersonajes } from './api/api-personajes.model';


export function transformPersonaje(apiPersonajes: ApiPersonajes): Personajes {
    delete apiPersonajes.createdAt;
    return apiPersonajes;
}