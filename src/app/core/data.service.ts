import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  temp: string;  
  constructor(public http: HttpClient) { 

  }
  
  getUsers1Data(): Observable<any>  { 
    const strUsers = "//jsonplaceholder.typicode.com/users?id=1";

    return this.http.get(strUsers).pipe(map(data => {
      let usersList = data; //todo: name of data
      console.log("usersList: ", usersList);
      return usersList;
      
    }),
      catchError(err => {
        console.log("err: ", err);
        return throwError(err);
      }))
  };

  getUsers2Data(): Observable<any>  { 
    const strUsers = "//jsonplaceholder.typicode.com/users?id=2";

    return this.http.get(strUsers).pipe(map(data => {
      let usersList = data; //todo: name of data
      console.log("usersList: ", usersList);
      return usersList;
      
    }),
      catchError(err => {
        console.log("err: ", err);
        return throwError(err);
      }))
  };

}
