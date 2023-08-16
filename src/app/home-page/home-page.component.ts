import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppService } from '../app.service';
import {  Dogs, races } from '../model/dogs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  selectRace = '';
  selectValue: any;
  selectValueContent: any;

  options: string[] = ["race 1", "race 2", "race 3"]

  dogs: Dogs[] = [];

  races: races[] = [];

  imageUrl: string = '';

  constructor(
    private router: Router,
    private appServive: AppService
  ){}

  ngOnInit(): void {
    this.getAllDogs()
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  //CRUD

  getAllDogs() {
    this.appServive.getAllDogsHome()
      .subscribe((data) => {
        this.dogs = data;
        // console.log(data[0].breeds[0].name)
        // console.log(data[0].breeds[0].life_span)
        console.log(data[0].url)
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
        // this.races = data;
      })
    }
  }

}
