import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

interface cards{
  name: string,
  info:string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(
    private router: Router
  ){}

  ngOnInit() {
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

  goToHome() {
    this.router.navigate(['/home'])
  }
}
