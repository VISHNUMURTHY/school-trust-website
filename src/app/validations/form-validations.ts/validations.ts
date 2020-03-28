import { FormControl } from '@angular/forms';


export const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
export const PHONE_PATTERN = '^[0-9]+$';

export class ValidationMessages {
    public static validationErrorMessages = {
        'username': [
            { type: 'required', message: 'Email/Mobile Number Required' },
            { type: 'validUsernameEmail', message: 'Username must be valid Email' },
            { type: 'validUsernameMobile', message: 'Username must be valid Mobile Number' }
        ],
        'password': [
            { type: 'required', message: 'Password Required' },
            { type: 'pattern', message: 'Password as invalid pattern' },
            { type: 'minlength', message: 'Password must have minimum 8 characters' }
        ],
        'otp': [
            { type: 'required', message: 'OTP is required' },
            { type: 'pattern', message: 'OTP is always numerical' },
            { type: 'minlength', message: 'OTP must contain 6 digits' }
        ]
    };
}

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
                if (fc.value.match(PHONE_PATTERN) && fc.value.length === 10) {
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
