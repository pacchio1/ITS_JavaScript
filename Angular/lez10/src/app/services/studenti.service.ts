import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  
  URL = 'https://its2023-500c1-default-rtdb.europe-west1.firebasedatabase.app/studenti.json'

  constructor(private http: HttpClient) { }

  getStudenti() {
    return this.http.get(this.URL)
  }
  
  




}
