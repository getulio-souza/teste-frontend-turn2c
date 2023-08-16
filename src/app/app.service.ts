import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Dogs } from './model/dogs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  header = new HttpHeaders({
    'x-api-key': 'live_SxyZtuzzz7VdKyJvgu03stLDO0FI0hG48ZxLTePPAhkxSyAH5SJ3Ux3cTjRv9LzR'
  });

  apiUrl = 'https://api.thedogapi.com'

  constructor(
    private http: HttpClient
  ) { }

  //HOME

  getAllDogsHome(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + `/v1/images/search?limit=8&has_breeds=1&page=0`, { headers: this.header })
  }

  getDogByRace( breed_ids: number): Observable<any>{
    return this.http.get(this.apiUrl + `/v1/breeds?limit=10/${breed_ids}`, {headers : this.header})
  }

  //PROFILE

  getAllDogsProfile(): Observable<any>{
    return this.http.get(this.apiUrl + `/v1/images/?limit=10&page=0`, { headers: this.header })
  }

  uploadNewDog(file: File): Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.apiUrl + `/v1/images/upload`, formData, {headers: this.header});
  }
}

