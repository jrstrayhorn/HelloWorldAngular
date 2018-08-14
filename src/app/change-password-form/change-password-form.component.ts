import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.shouldMatchOldPassword),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', [Validators.required])
  });

  get oldPassword() {
    return this.form.get('oldPassword') as FormControl;
  }

  get newPassword() {
    return this.form.get('newPassword') as FormControl;
  }

  get confirmPassword() {
    return this.form.get('confirmPassword') as FormControl;
  }

  checkMatch() {
    if (this.newPassword.value != this.confirmPassword.value) {
      this.confirmPassword.setErrors({
        passwordNotMatching: true
      });
    }
  }

}
