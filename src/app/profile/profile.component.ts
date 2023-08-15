import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppService } from '../app.service';

interface cards{
  name: string,
  info:string
}

class ImageSnippet {
  constructor(public src: string, public file: File){}
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  selectedFile: ImageSnippet;

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

  uploadNewDog(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load',(event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.appService.uploadNewDog(this.selectedFile.file).subscribe((data: any) => {
        console.log(data)
        this.cards = data;
      },
      )
    })

    reader.readAsDataURL(file)
  }
}
