// app/translate/translate.service.ts
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var translations_1 = require('./translations'); // import our opaque token
var TranslateService = (function () {
    // inject our translations
    function TranslateService(_translations) {
        this._translations = _translations;
        this.PLACEHOLDER = '%'; // our placeholder
        this.onLangChanged = new core_1.EventEmitter(); // add event
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this._currentLang || this._defaultLang; // return default lang if no current lang
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.setDefaultLang = function (lang) {
        this._defaultLang = lang; // set default lang
    };
    TranslateService.prototype.use = function (lang) {
        // set current language
        this._currentLang = lang;
        this.onLangChanged.emit(lang); // publish changes
    };
    TranslateService.prototype.enableFallback = function (enable) {
        this._fallback = enable; // enable or disable fallback language
    };
    TranslateService.prototype.translate = function (key) {
        // private perform translation
        var translation = key;
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
    };
    TranslateService.prototype.instant = function (key, words) {
        var translation = this.translate(key);
        if (!words)
            return translation;
        return this.replace(translation, words); // call replace function
    };
    TranslateService.prototype.replace = function (word, words) {
        var _this = this;
        if (word === void 0) { word = ''; }
        if (words === void 0) { words = ''; }
        var translation = word;
        var values = [].concat(words);
        values.forEach(function (e, i) {
            translation = translation.replace(_this.PLACEHOLDER.concat(i), e);
        });
        return translation;
    };
    TranslateService = __decorate([
        // import our opaque token
        core_1.Injectable(),
        __param(0, core_1.Inject(translations_1.TRANSLATIONS)), 
        __metadata('design:paramtypes', [Object])
    ], TranslateService);
    return TranslateService;
}());
exports.TranslateService = TranslateService;
//# sourceMappingURL=translate.service.js.map