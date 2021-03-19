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
  newUser: User = { username: '', email: '', password: '', role: false };

  confirmPassword: string;
  passwordsMatch: boolean = true;
  formValid: boolean = false;
  emailValid: boolean = false;

  dropdownString: string = "User Role";
  passwordPattern: string = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}";
  usernamePattern: string = "^[a-z0-9._%+-]{6,18}";
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}";
  roleStrings: string[] = ["Administrator", "Cashier"];

  constructor() { }

  ngOnInit(): void {
  }

  onRegister(): void {
    // this.newUser.role = false;
    // let userString: string = '';

    const validation = this.validateForm();
    if (validation !== true){
        alert(validation);
        return;
    }

    console.log(this.newUser);
  }

  validateForm(): boolean | string {
    console.log("validate called");
    this.setUserRole();

    if(!this.comparePasswords()) {
      return "Passwords don't match. Please re-type them and ensure they are the same.";
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
    if (this.roleStrings.find(element => element === this.dropdownString)){
      return true;
    }
    return false;
  }

  setUserRole(): void{
    if (this.dropdownString === this.roleStrings[0]){
      this.newUser.role = true;
    } else {
      this.newUser.role = false;
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
