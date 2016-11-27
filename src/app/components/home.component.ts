import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';
import { TranslateService }             from '../_translate/index';
import { AuthService, MainService }     from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'home',
    template: `
        <nav materialize class="teal lighten-2">
            <div class="nav-wrapper">
              <a class="brand-logo">Eleos</a>
              <a materialize="sideNav" [materializeParams]="[{edge:'left'},{closeOnClick: true}]" href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                 <li *ngFor="let routeName of routeNames" routerLinkActive="active"><a [routerLink]="[routeName]">{{ routeName | translate}}</a></li>
                 <li><a (click)=authService.logout()>{{ 'log_out' | translate }}</a></li>
              </ul>
            </div>
        </nav>
        
        <ul materialize class="side-nav" id="mobile-demo">
            <li><a routerLink="news"><i class="material-icons">people</i>{{ 'accounts' | translate }}</a></li>
            <li><a routerLink="news"><i class="material-icons">insert_chart</i>{{ 'reports' | translate }}</a></li>
            <li><a routerLink="news"><i class="material-icons">question_answer</i>{{ 'questions' | translate }}</a></li>
            <li><div class="divider"></div></li>
            <li><a (click)=authService.logout()><i class="material-icons">exit_to_app</i>{{ 'log_out' | translate }}</a></li>
        </ul>
        
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    providers: [ MainService ]
})


export class HomeComponent implements OnInit {
    // TODO: ngFor for menu items with icons
    private routeNames = ["accounts", "reports", "questions"];

    public  translatedText: string;
    public  supportedLanguages: any[];
    private router: Router;
    private error: any;

    constructor(
        private authService: AuthService,
        private translateService: TranslateService,
        private mainService: MainService
    ) { }

    ngOnInit(): void {
        // standing data
        this.supportedLanguages = [
            {display: 'English', value: 'en'},
            {display: 'French', value: 'fr'},
            {display: 'Bengali', value: 'bn'}
        ];

        this.subscribeToLangChanged(); // subscribe to language changes

        // set language
        this.translateService.setDefaultLang('en'); // set English as default
        this.translateService.enableFallback(true); // enable fallback

        // set current language
        this.selectLang('en');
    }

    isCurrentLang(lang: string) {
        // check if the selected lang is current lang
        return lang === this.translateService.currentLang;
    }

    selectLang(lang: string) {
        // set current lang;
        this.translateService.use(lang);
    }

    refreshText() {
        // refresh translation when language change
        this.translatedText = this.translateService.instant('hello world');
    }

    subscribeToLangChanged() {
        // refresh text
        // please unsubribe during destroy
        return this.translateService.onLangChanged.subscribe(x => this.refreshText());
    }

}