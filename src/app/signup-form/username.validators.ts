import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "dns";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1)
            return { cannotContainSpace: true }
        return null;
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == 'mosh')
                    resolve({ shouldBeUnique: true });
                else 
                    resolve(null);
            }, 2000);
        });

    }
}
    // can also return a object to be retrieve like username.errors.minlength.requiredLength
            // return { minlength: {
            //     requiredLength: 10,
            //     actualLength: control.value.length
            // }}