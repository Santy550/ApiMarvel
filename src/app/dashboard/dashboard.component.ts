import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  heroes: any = [];
  showSearchResult:boolean = true;

  ngOnInit(): void {
    this.showSearchResult = false;
    this.heroService.getHeroes().subscribe((result)=>{
      console.log(result);
      this.heroes = result.data.results;
    });
  }

  /*
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }*/

  /* public mostrarHeroes(): void {
    fetch('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=cap&ts=patata&apikey=6fd43fb837b074122934aefe035690fd&hash=7bf3a80f2c82da070f2b1230ae6bc026')
      .then(response => response.json())
      .then(json => {
        json.data.results.map((item: { thumbnail: { path: any; extension: any; }; name: any; }) => {
          let url = item.thumbnail.path + item.thumbnail.extension
          this.hero.innerHtml += `<div class = "item">
       <img src = ${url.replace('http', 'https')}>
        <span>${item.name}</span>
        </div>`
        })
      })
    console.log(this.hero);
  }*/




}
