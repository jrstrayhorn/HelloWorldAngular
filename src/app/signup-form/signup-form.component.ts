import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required), // should use 'user-name' for key if using special characters
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
}
