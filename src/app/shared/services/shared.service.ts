import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    constructor() { }

    encrypt(plainText: string) {

    }

    base64Encode(text: string): string {
        return btoa(text);
    }

    decode64Encode(text: string): string {
        return atob(text);
    }
}
