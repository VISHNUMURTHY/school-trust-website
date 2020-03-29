import { FormControl } from '@angular/forms';
import { EMAIL_PATTERN, MOBILE_PATTERN } from '../validation.messages';

export class UsernameValidator {

    static validUsername = (fc: FormControl) => {
        if (fc.value !== '' && fc.value !== null && fc.value !== undefined) {
            if (isNaN(fc.value)) {
                if (fc.value.match(EMAIL_PATTERN)) {
                    return null;
                } else {
                    return {
                        validUsernameEmail: true
                    };
                }
            } else {
                if (fc.value.match(MOBILE_PATTERN) && fc.value.length === 10) {
                    return null;
                } else {
                    return {
                        validUsernameMobile: true
                    };
                }
            }
        } else {
            return null;
        }
    }
}
