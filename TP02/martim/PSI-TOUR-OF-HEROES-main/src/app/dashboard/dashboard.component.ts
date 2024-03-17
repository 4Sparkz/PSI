import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { PetService } from '../pet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  // pets: string[] = [];

  // constructor(private heroService: HeroService, private petService: PetService) { }
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
    // this.pets = this.petService.getPets();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}