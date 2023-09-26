import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  loggedinUser!: string;

  constructor() {}

  loggedin() {
    this.loggedinUser = localStorage.getItem('token') || '';
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
  }

}
