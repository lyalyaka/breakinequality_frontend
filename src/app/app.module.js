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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var angular2_materialize_1 = require('angular2-materialize');
var app_routing_1 = require('./app.routing');
var index_1 = require('./_services/index');
var index_2 = require('./_guards/index');
var app_component_1 = require('./app.component');
var _translate_1 = require('./_translate');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routing_1.routing,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                app_routing_1.routedComponents,
                angular2_materialize_1.MaterializeDirective,
                _translate_1.TranslatePipe
            ],
            providers: [
                angular2_jwt_1.AUTH_PROVIDERS,
                _translate_1.TRANSLATION_PROVIDERS,
                _translate_1.TranslateService,
                index_1.AuthService,
                index_2.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map