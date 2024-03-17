import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets: string[] = ['Dog', 'Cat', 'Bird', 'Fish'];

  constructor() { }

  getPets(): string[] {
    return this.pets;
  }
}
