import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }
  // navigateToLogin(){

  //   this.router.navigate(['/home'])

  // }

  username: any;
  password: any;

  submitForm() {
    // Check if any field is empty

    console.log(this.username, this.password);
    
    const isAnyFieldEmpty = this.isAnyFieldEmpty();
    if (isAnyFieldEmpty) {
      // Show SweetAlert message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all details!',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Login Sccuess',
        text: 'Explore Our website!',
      });

      this.router.navigate(['/home'])
      
      console.log('Form submitted successfully!');
    }
  }

  isAnyFieldEmpty(): boolean {
    // Check if any input field is empty
    if (!this.username|| !this.password) {
      return true;
    }
    return false;
  }
}
