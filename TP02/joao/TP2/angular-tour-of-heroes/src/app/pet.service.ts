import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class PetService {

    pets: string[] = ['Pet1', 'Pet2', 'Pet3', 'Pet4'];

    constructor() { }

    getPets(): string[] {
        return this.pets;
    }

}
