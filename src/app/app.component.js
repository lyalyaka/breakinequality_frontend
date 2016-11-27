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
var index_1 = require('./_services/index');
var index_2 = require('./_translate/index');
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(authService, _translate) {
        this.authService = authService;
        this._translate = _translate;
    }
    AppComponent.prototype.ngOnInit = function () {
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
    };
    AppComponent.prototype.isCurrentLang = function (lang) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    };
    AppComponent.prototype.selectLang = function (lang) {
        // set current lang;
        this._translate.use(lang);
    };
    AppComponent.prototype.refreshText = function () {
        // refresh translation when language change
        this.translatedText = this._translate.instant('hello world');
    };
    AppComponent.prototype.subscribeToLangChanged = function () {
        var _this = this;
        // refresh text
        // please unsubribe during destroy
        return this._translate.onLangChanged.subscribe(function (x) { return _this.refreshText(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            providers: [index_1.AuthService],
            template: "<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [index_1.AuthService, index_2.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map