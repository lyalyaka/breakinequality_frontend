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
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
require('rxjs/Rx');
require('rxjs/add/operator/map');
var MainService = (function () {
    function MainService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.mainUrl = 'https://tnapi.herokuapp.com/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.recordsUrl = this.mainUrl + 'record?component_key=eq.';
        this.recUrl = this.mainUrl + 'record?component_key=@@.'; //contains word
        this.recordsPostUrl = this.mainUrl + 'record?id=eq.';
        this.newsPostUrl = this.mainUrl + 'record';
        this.newsUrl = this.mainUrl + 'record?component_key=eq.news&order=created_date';
    }
    //to handle errors
    MainService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MainService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], MainService);
    return MainService;
}());
exports.MainService = MainService;
//# sourceMappingURL=main.service.js.map