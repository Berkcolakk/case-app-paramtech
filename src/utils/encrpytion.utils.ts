import { KEY } from "@/constants";

export function b64e(str: any) {
    try {
        const encrypted = [];
        for (let i = 0; i < str.length; i++) {
            encrypted[i] = str.charCodeAt(i) ^ KEY.charCodeAt(i % KEY.length);
        }
        return btoa(String.fromCharCode(...encrypted));
    } catch (error) {
        console.error('Base64 encoding error:', error);
        return null;
    }
}

export function b64d(encodedStr: any) {
    try {
        if(!encodedStr) {
            return null;
        }
        const decrypted = atob(encodedStr).split('').map((char, i) => char.charCodeAt(0) ^ KEY.charCodeAt(i % KEY.length));
        return String.fromCharCode(...decrypted);
    } catch (error) {
        console.error('Base64 decoding error:', error);
        return null;
    }
}