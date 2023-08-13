import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppService } from '../app.service';

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
    private router: Router,
    private appService: AppService
  ){}

  ngOnInit() {
    this.getAllDogs()
  }

cards: cards[] = [
];

  goToHome() {
    this.router.navigate(['/'])
  }

  getAllDogs() {
    this.appService.getAllDogsProfile().subscribe((data) => {
      console.log(data)
      this.cards = data;
    })
  }

  uploadNewDog() {
    // this.appService.uploadDog().subscribe((data) => {
    //   this.cards = data;
    // })
  }
}
