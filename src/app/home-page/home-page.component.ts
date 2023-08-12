import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

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

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

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
    this.router.navigate(['/profile'])
  }
}
