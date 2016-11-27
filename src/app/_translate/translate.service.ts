// app/translate/translate.service.ts

import { Injectable, Inject, EventEmitter } from '@angular/core';
import { TRANSLATIONS } from './translations'; // import our opaque token

@Injectable()
export class TranslateService {

    private _defaultLang: string;
    public  _currentLang: string;
    private _fallback: boolean;
    private PLACEHOLDER = '%'; // our placeholder
    public onLangChanged: EventEmitter<string> = new EventEmitter<string>();  // add event


    // inject our translations
    constructor(@Inject(TRANSLATIONS) private _translations: any) { }


    public get currentLang() {
        return this._currentLang || this._defaultLang; // return default lang if no current lang
    }


    public setDefaultLang(lang: string) {
        this._defaultLang = lang; // set default lang
    }


    public use(lang: string): void {
        // set current language
        this._currentLang = lang;
        this.onLangChanged.emit(lang); // publish changes
    }


    public enableFallback(enable: boolean) {
        this._fallback = enable; // enable or disable fallback language
    }


    private translate(key: string): string {
        // private perform translation
        let translation = key;

        // found in current language
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }

        // fallback disabled
        if (!this._fallback) {
            return translation;
        }

        // found in default language
        if (this._translations[this._defaultLang] && this._translations[this._defaultLang][key]) {
            return this._translations[this._defaultLang][key];
        }

        // not found
        return translation;
    }


    public instant(key: string, words?: string | string[]) { // add optional parameter
        const translation: string = this.translate(key);

        if (!words) return translation;
        return this.replace(translation, words); // call replace function
    }

    public replace(word: string = '', words: string | string[] = '') {
        let translation: string = word;

        const values: string[] = [].concat(words);
        values.forEach((e, i) => {
            translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e);
        });

        return translation;
    }


}