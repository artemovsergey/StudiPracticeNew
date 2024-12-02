import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ReplaySubject } from 'rxjs';
import User from '../../models/user';

@Injectable({
providedIn: 'root'
})
export class AuthService {

baseUrl:String = "http://localhost:5228/";

private currentUserSource = new ReplaySubject<User>(1);
currentUser$ = this.currentUserSource.asObservable();

constructor(private http:HttpClient) { }

login(model:any){
    
return this.http.post<User>(this.baseUrl + "Users/Login", model).pipe(
  map((response: User) => {
    const user = response;
    if(user){
      localStorage.setItem("user", JSON.stringify(user))
      this.currentUserSource.next(user);
      console.log(user)
    }
    else{
      console.log(response)
    }
  })
)
}

}