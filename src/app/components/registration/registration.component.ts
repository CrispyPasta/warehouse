import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // custom type property to capture user reg info
  newUser?: User;
  userList?: User[] = [];

  constructor() { }

  ngOnInit(): void {
    this.userList = USERS;
    this.newUser = { username: '', email: '', password: '', role: false };
  }

  onRegister(username: string): void {
    this.newUser.username = username;
    this.newUser.email = username;
    this.newUser.password = username;
    this.newUser.role = false;

    let userString: string = '[';
    userString += this.newUser.username + ', ';
    userString += this.newUser.email + ', ';
    userString += this.newUser.password + ', ';
    if (this.newUser.role){
      userString += 'Admin';
    } else {
      userString += 'Cashier';
    }
    userString += ']';

    console.log(userString);
  }

}
