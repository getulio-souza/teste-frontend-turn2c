import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AppService {

  header = new HttpHeaders({
    'x-api-key': 'live_SxyZtuzzz7VdKyJvgu03stLDO0FI0hG48ZxLTePPAhkxSyAH5SJ3Ux3cTjRv9LzR'
  });

  url = ' https://api.thedogapi.com/v1/images/search?limit=8&has_breeds=1&page=0';
  url2 = 'https://api.thedogapi.com/v1/images/?limit=10&page=0'

  constructor(
    private http: HttpClient
  ) { }


  //HOME
  getAllDogsHome(): Observable<any>{
    return this.http.get(this.url, {headers : this.header})
  }

  //FAZER DEPOIS PARA FAZER O FILTRO FUNCIONAR!!!
  // getByDogRace(): Observable<any>{
  //   return this.http.get(this.url )
  // }

  //PROFILE

  getAllDogsProfile(): Observable<any>{
    return this.http.get(this.url2, {headers : this.header})
  }

  // uploadDog(): Observable<any>{
  //   return this.http.post(this.url2, {headers: this.header})
  // }
}

