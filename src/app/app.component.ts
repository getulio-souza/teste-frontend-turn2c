import { Component } from '@angular/core';

interface cards{
  name: string,
  info:string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'teste_turn2C';


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
  ]
}

