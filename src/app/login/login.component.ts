import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router : Router){

  }
  email: string = 'test@gmail.com';
  password: string = 'admin';

  onSubmit() {
    if(this.email == 'test@gmail.com' && this.password == 'admin'){
      localStorage.setItem("is_logged_in","true");
      localStorage.setItem("email",this.email);
      this.router.navigate(['/dashboard']);
    }else{
      alert("Invalid Email/Password..")
    }
    // Handle login logic here, e.g., call a service to authenticate
    console.log('Login submitted', this.email, this.password);
  }

  onForgotPassword() {
    // Handle forgot password action
    console.log('Forgot password clicked');
  }

  onSignUp() {
    // Handle sign-up action
    console.log('Sign-up clicked');
  }
}
