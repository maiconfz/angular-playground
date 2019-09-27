import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroService: HeroService;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  heroes: Hero[];

  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
