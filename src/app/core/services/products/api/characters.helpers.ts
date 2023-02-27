import { ApiCharacters } from 'src/app/core/services/products/api/api-characters.models';


import { Person } from "src/app/core/services/products/character.models";

export function transformCharacters(apiCharacters: ApiCharacters ): Person {
    delete apiCharacters.origin;
    delete apiCharacters. location;
    delete apiCharacters.url;
    delete apiCharacters.created;

    return {
        ...apiCharacters,
    }
    };
