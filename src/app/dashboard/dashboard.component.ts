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

}
