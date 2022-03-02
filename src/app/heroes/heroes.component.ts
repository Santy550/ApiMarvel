import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  showSearchResult: boolean = true;
  showSearchCharacter: boolean = true;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.showSearchResult = false;
    this.showSearchCharacter = false;
    this.heroService.getHeroes().subscribe((result) => {
      console.log(result);
      this.heroes = result.data.results;
    });
  }



}
