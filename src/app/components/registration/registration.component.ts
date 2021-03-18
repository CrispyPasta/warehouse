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
  newUser: User;
  userList: User[];
  confirmPassword?: string;
  passwordsMatch: boolean = true;
  formValid: boolean = false;
  dropdownString: string = "User Role";

  constructor() { }

  ngOnInit(): void {
    this.userList = USERS;
    this.newUser = { username: '', email: '', password: '', role: false };
  }

  onRegister(): void {
    // this.newUser.role = false;
    // let userString: string = '';

    const validation = this.validateForm();
    if (validation !== true){
        alert(validation);
        return;
    }
    //   userString += '[';
    //   userString += this.newUser.username + ', ';
    //   userString += this.newUser.email + ', ';
    //   userString += this.newUser.password + ', ';
    //   if (this.newUser.role){
    //     userString += 'Admin]';
    //   } else {
    //     userString += 'Cashier';
    //     userString += ']';
    //   }
    // } else {
    //   userString = "Passwords don't match. Please re-type them and ensure they are the same.";
    // }


    console.log(this.newUser);
  }

  validateForm(): boolean | string {
    console.log("validate called");
    this.setUserRole();

    if(!this.comparePasswords()) {
      return "Passwords don't match.Please re-type them and ensure they are the same.";
    }

    if (!this.validateRole()){
      return "No user role chosen. Please choose a role and try again.";
    }

    if (!this.validateEmail()){
      return "Email address is invalid. Please enter a valid address.";
    }

    if (!this.validateUsername()){
      return "Username is invalid. Please enter a valid username.";
    }

    this.formValid = true;
    return true;
  }

  comparePasswords(): boolean{
    if (this.newUser.password === this.confirmPassword){
      this.passwordsMatch = true;
      return true;
    } else {
      this.passwordsMatch = false;
      return false; 
    }
  } 

  validateRole(): boolean{
    if (this.dropdownString === "User Role"){
      return false;
    }

    return true;
  }

  setUserRole(): void{
    if (this.dropdownString === "Administrator"){
      this.newUser.role = true;
    } 
  }

  validateUsername(): boolean{
    return true;
  }

  validateEmail(): boolean{
    //apply same validation rule here as on the page?
    return true;
  }

}
