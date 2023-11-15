import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScienziatiService {

  constructor(private http: HttpClient) { }

  getScienziati(){
    return this.http.get('http://www.bogliaccino.it/api/public/scienziati.php')
  }

}
