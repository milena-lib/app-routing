import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDataLoadedEmitter: EventEmitter<any> = new EventEmitter<any>();
  userPostDataLoadedEmitter: EventEmitter<any> = new EventEmitter<any>();

  private userData: any;
  private setData(response){
    this.userData = response;
    this.userDataLoadedEmitter.emit(null);
  }
  getData(){
    return this.userData;
  }

  getLocalStorageDataByKey(key){
    return  JSON.parse(localStorage.getItem(key));
  }

  constructor(public http: HttpClient) { 

  }
  

  getUsersData(): Observable<any>  { 
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


  ngOnDestroy(){
    localStorage.removeItem("post-1");
  }
}
