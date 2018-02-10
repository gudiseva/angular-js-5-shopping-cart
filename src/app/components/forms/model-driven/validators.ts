import { FormControl } from "@angular/forms";

export function zipCodeValidator(c: FormControl) {

    // false -> obj
    // true -> null

    if(c.value == 560026) {
        return null;
    } else {
        return {
            zipCode: {
                code : 560026
            }
        };
    }

}