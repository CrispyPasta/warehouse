import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordPattern: string = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}";
  usernamePattern: string = "^[a-z0-9._%+-]{6,18}";
  user: User = {email:'', username:'', password:'', role:false};

  constructor() { }

  ngOnInit(): void {
    //it will be necessary to send the received user info to the server here, and the server will respond with the more 
    //detailed information regarding that user.
  }

  onLogin(){
    console.log(this.user);
  }

}
