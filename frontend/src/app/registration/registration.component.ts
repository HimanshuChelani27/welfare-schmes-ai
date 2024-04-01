// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent {

// }
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private router: Router){

  }
  fullName!: string;
  username!: string;
  email!: string;
  phoneNumber!: string;
  password!: string;
  confirmPassword!: string;
  gender!: string;

  submitForm() {
    // Check if any field is empty

    console.log(this.username, this.fullName, this.email, this.phoneNumber, this.password, this.confirmPassword);
    
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
        title: 'Registration Sccuess',
        text: 'Please Login!',
      });

      this.router.navigate(['/login'])
      
      console.log('Form submitted successfully!');
    }
  }

  isAnyFieldEmpty(): boolean {
    // Check if any input field is empty
    if (!this.fullName || !this.username || !this.email || !this.phoneNumber || !this.password || !this.confirmPassword) {
      return true;
    }
    return false;
  }
}
