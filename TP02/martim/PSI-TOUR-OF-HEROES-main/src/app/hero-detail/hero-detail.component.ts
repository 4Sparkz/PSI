import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { PetService } from '../pet.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe, CommonModule],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  pets!: string[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private petService: PetService,
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getPets();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  getPets(): void {
    this.pets = this.petService.getPets(); // Obtém a lista de pets do serviço
  }



}