import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
    getUsers(){
      return this.http.get('http://jsonplaceholder.typicode.com/users')
    }

    getUser(userId){
      return this.http.get('http://jsonplaceholder.typicode.com/users/'+userId)
    }
    
    getPost(){
      return this.http.get('http://jsonplaceholder.typicode.com/post')
    }
}
