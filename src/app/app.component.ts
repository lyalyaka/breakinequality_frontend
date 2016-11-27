import { Component, OnInit }    from '@angular/core';
import { AuthService }          from './_services/index';
import { TranslateService }     from './_translate/index';
import './rxjs-operators';


@Component({
    moduleId: module.id,
    selector: 'app',
    providers: [ AuthService ],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit{

    public translatedText: string;
    public supportedLanguages: any[];

    constructor(private authService: AuthService, private _translate: TranslateService) { }

    ngOnInit() {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: 'French', value: 'fr' },
        ];

        this.subscribeToLangChanged(); // subscribe to language changes

        // set language
        this._translate.setDefaultLang('en'); // set English as default
        this._translate.enableFallback(true); // enable fallback

        // set current language
        this.selectLang('en');
    }

    isCurrentLang(lang: string) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set current lang;
        this._translate.use(lang);
    }

    refreshText() {
        // refresh translation when language change
        this.translatedText = this._translate.instant('hello world');
    }

    subscribeToLangChanged() {
        // refresh text
        // please unsubribe during destroy
        return this._translate.onLangChanged.subscribe(x => this.refreshText());
    }

}
