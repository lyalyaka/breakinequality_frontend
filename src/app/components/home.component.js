"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('../_translate/index');
var index_2 = require('../_services/index');
var HomeComponent = (function () {
    function HomeComponent(authService, translateService, mainService) {
        this.authService = authService;
        this.translateService = translateService;
        this.mainService = mainService;
        // TODO: ngFor for menu items with icons
        this.routeNames = ["questions", "reports", "account"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: 'French', value: 'fr' },
            { display: 'Bengali', value: 'bn' }
        ];
        this.subscribeToLangChanged(); // subscribe to language changes
        // set language
        this.translateService.setDefaultLang('en'); // set English as default
        this.translateService.enableFallback(true); // enable fallback
        // set current language
        this.selectLang('en');
    };
    HomeComponent.prototype.isCurrentLang = function (lang) {
        // check if the selected lang is current lang
        return lang === this.translateService.currentLang;
    };
    HomeComponent.prototype.selectLang = function (lang) {
        // set current lang;
        this.translateService.use(lang);
    };
    HomeComponent.prototype.refreshText = function () {
        // refresh translation when language change
        this.translatedText = this.translateService.instant('hello world');
    };
    HomeComponent.prototype.subscribeToLangChanged = function () {
        var _this = this;
        // refresh text
        // please unsubribe during destroy
        return this.translateService.onLangChanged.subscribe(function (x) { return _this.refreshText(); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            template: "\n        <nav materialize class=\"teal lighten-2\">\n            <div class=\"nav-wrapper\">\n              <a class=\"brand-logo\">&nbsp;&nbsp;Eleos</a>\n              <a materialize=\"sideNav\" [materializeParams]=\"[{edge:'left'},{closeOnClick: true}]\" href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n              <ul class=\"right hide-on-med-and-down\">\n                 <li *ngFor=\"let routeName of routeNames\" routerLinkActive=\"active\"><a [routerLink]=\"[routeName]\">{{ routeName | translate}}</a></li>\n                 <li><a (click)=authService.logout()>{{ 'log_out' | translate }}</a></li>\n                 <!--&lt;!&ndash; Dropdown Trigger &ndash;&gt;-->\n                  <!--<a materialize=\"dropdown\" class='dropdown-button btn-flat' data-activates='dropdown1'>Drop Me!</a>-->\n                <!---->\n                  <!--&lt;!&ndash; Dropdown Structure &ndash;&gt;-->\n                  <!--<ul id='dropdown1' class='dropdown-content'>-->\n                    <!--<li><a href=\"#!\">one</a></li>-->\n                    <!--<li><a href=\"#!\">two</a></li>-->\n                  <!--</ul>-->\n              </ul>\n            </div>\n        </nav>\n        \n        <ul materialize class=\"side-nav\" id=\"mobile-demo\">\n            <li><a routerLink=\"news\"><i class=\"material-icons\">people</i>{{ 'accounts' | translate }}</a></li>\n            <li><a routerLink=\"news\"><i class=\"material-icons\">insert_chart</i>{{ 'reports' | translate }}</a></li>\n            <li><a routerLink=\"news\"><i class=\"material-icons\">question_answer</i>{{ 'questions' | translate }}</a></li>\n            <li><div class=\"divider\"></div></li>\n            <li><a (click)=authService.logout()><i class=\"material-icons\">exit_to_app</i>{{ 'log_out' | translate }}</a></li>\n        </ul>\n        \n        <div>\n            <router-outlet></router-outlet>\n        </div>\n    ",
            providers: [index_2.MainService]
        }), 
        __metadata('design:paramtypes', [index_2.AuthService, index_1.TranslateService, index_2.MainService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map