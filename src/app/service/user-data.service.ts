import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:7000/api/findallcustomer";  //get api


  getAllUser() {
    return this.http.get(this.url)
  }

}
