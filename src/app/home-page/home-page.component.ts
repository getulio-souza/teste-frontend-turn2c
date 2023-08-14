import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppService } from '../app.service';
import { cards, races } from '../model/dogs';

type ContentView = 'home' | 'profile'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  contentView!: ContentView;
  name: string = "";
  life_span: string = "";
  selectRace = '';
  selectValue: any;
  selectValueContent: any;
  options: string[] = ["race 1", "race 2", "race 3"]
  cards: cards[] = [];
  races: races[] = [];
  imageUrl: string

  constructor(
    private router: Router,
    private appServive: AppService
  ){}

  ngOnInit(): void {
    this.getAllDogs()
  }

  goToProfile() {
    this.router.navigate(['/profile']);
    this.contentView = 'home'
  }

  handleNavigation() {
    let currentPage = window.location.href;

    if (currentPage.includes('home')) {
      this.contentView = 'home';
    } else {
      this.contentView = 'profile'
    }
  }

  //CRUD

  // HOME - falta passar o nome e raca do cachorro
  getAllDogs() {
    this.appServive.getAllDogsHome().subscribe((data) => {
      console.log(data);
      this.cards = data;
      this.name = data;
      this.life_span = data;
    })
  }

  onSelected(value: string): void {
    this.selectRace = value;
    this.selectValueContent = this.getDogByRace(this.selectValue);
  }

  getDogByRace(id: number) {
    if (this.selectRace === 'race 1' || 'race 2' || 'race 3') {
      this.appServive.getDogByRace(id).subscribe((data) => {
        // console.log(data)
        this.races = data;
      })
    }
  }

}
