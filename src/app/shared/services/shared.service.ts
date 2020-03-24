import { Injectable } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Buffer } from 'buffer';

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
