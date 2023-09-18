import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  addUser(user: any) {
    let users: any[] = JSON.parse(localStorage.getItem('Users') || '[]');
    if (!Array.isArray(users)) {
      users = [];
    }
    users.push(user);
    localStorage.setItem('Users', JSON.stringify(users));
  }

}
