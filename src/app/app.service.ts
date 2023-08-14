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

  // url = ' https://api.thedogapi.com/v1/images/search?limit=8&has_breeds=1&page=0';
  // url2 = 'https://api.thedogapi.com/v1/images/?limit=10&page=0'
  // postUrl = 'https://api.thedogapi.com/v1/images/upload'
  // getRaceUrl = 'https://api.thedogapi.com/v1/breeds?limit=10'

  apiUrl = 'https://api.thedogapi.com'

  constructor(
    private http: HttpClient
  ) { }


  //HOME

  //get all dogs (home)
  getAllDogsHome(): Observable<any>{
    return this.http.get(this.apiUrl + `/v1/images/search?limit=8&has_breeds=1&page=0`, {headers : this.header})
  }

  //select by race
  getDogByRace( breed_ids: number): Observable<any>{
    return this.http.get(this.apiUrl + `/v1/breeds?limit=10/${breed_ids}`, {headers : this.header})
  }

  //PROFILE

  //get all dogs (profile)
  getAllDogsProfile(): Observable<any>{
    return this.http.get(this.apiUrl + `/v1/images/?limit=10&page=0`, {headers : this.header})
  }

  //upload new dog
  uploadNewDog(image: File): Observable<any>{
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(this.apiUrl + `/v1/images/upload`, formData, {headers: this.header});
  }
}

