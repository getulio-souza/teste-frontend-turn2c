import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppService } from '../app.service';

type ContentView = 'home' | 'profile'

interface cards{
  name: string,
  bred_for:string
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  contentView!: ContentView;

  constructor(
    private router: Router,
    private appServive: AppService
  ){}

  ngOnInit(): void {
    this.getAllDogs()
  }

  cards: cards[] = [];

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

  //api integration

  // HOME - falta passar o nome e raca do cachorro
  getAllDogs() {
    this.appServive.getAllDogsHome().subscribe((data) => {
      console.log(data)
      this.cards = data;
    })
  }

  getByRace(){}

}
