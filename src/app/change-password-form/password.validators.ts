import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "url";


export class PasswordValidators {
    static shouldMatchOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value != '1234')
                    resolve({ shouldMatchOldPassword: true });
                else
                    resolve(null);
            }, 1000);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value)
            return { passwordsShouldMatch: true };
        
        return null;
    }
}