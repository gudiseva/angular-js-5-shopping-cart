import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REGEX_PATTERNS } from '../REGEX_PATTERNS';
import { zipCodeValidator } from './validators';

export function FormModel() {
    return new FormGroup({
        name : new FormControl(null, [Validators.required, Validators.minLength(5)]),
        age : new FormControl(null, [Validators.required, Validators.min(18), Validators.max(45)]),
        email : new FormControl(null,
                [Validators.required, Validators.pattern(REGEX_PATTERNS.EMAIL)]),
        contact : new FormControl(null, [Validators.required]),
        address : new FormGroup({
            city : new FormControl(),
            pincode: new FormControl(null, [Validators.required, zipCodeValidator])
        })  
    }, { updateOn : 'blur' }); // change / blur / submit
}