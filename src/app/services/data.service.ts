import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userList: User[] = [];

  constructor() { }

  public sayHello() {
    console.log('Hello from service ts');
  }

  public addUser(userVal: User) {
    this.userList.push(userVal);
  }

  public getAllUsers() {
    return this.userList;
  }
}
