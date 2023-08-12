import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

type ContentView = 'home' | 'profile'

interface cards{
  name: string,
  info:string
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  contentView!: ContentView;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.handleNavigation();
  }

   //remover os objetos abaixo depois de fazer a conexao com a api
  cards: cards[] = [
    {
      name: "Chinook",
      info: "12 - 15 anos"
    },
    {
      name: "Chinook",
      info: "12 - 15 anos"
    },
    {
      name: "Chinook",
      info: "12 - 15 anos"
    },
    {
      name: "Chinook",
      info: "12 - 15 anos"
    },
    {
      name: "Chinook",
      info: "12 - 15 anos"
    },
    {
      name: "Chinook",
      info: "12 - 15 anos"
    },
  ];

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
}
