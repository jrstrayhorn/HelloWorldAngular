import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1)
            return { cannotContainSpace: true }
        return null;
    }

    static shouldBeUnique(control: AbstractControl) : ValidationErrors | null {
        setTimeout(() => {
            if (control.value == 'mosh')
                return { shouldBeUnique: true }
            return null;
        }, 2000);

        // this will not cause a typescript error but will not work because
        // function will always return null
        return null;
    }
}
    // can also return a object to be retrieve like username.errors.minlength.requiredLength
            // return { minlength: {
            //     requiredLength: 10,
            //     actualLength: control.value.length
            // }}