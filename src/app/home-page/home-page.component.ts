import { Component } from '@angular/core';

interface cards{
  name: string,
  info:string
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

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
}
