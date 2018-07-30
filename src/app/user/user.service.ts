import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor() { 
    this.user = {
      name: "Vishal Nananiya"
    }
  }

  getUser(){
    return this.user;
  }

  getDetail(){
    let dataPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data");
      },1000)
    });
    return dataPromise; 
  }
}
