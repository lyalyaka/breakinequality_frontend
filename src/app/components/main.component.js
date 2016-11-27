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
var index_1 = require('../_services/index');
var MainComponent = (function () {
    function MainComponent(authService) {
        this.authService = authService;
    }
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main',
            template: "\n        <p>Login:  app.127.0.0.1@gmail.com    Pwd: hackathon</p>\n        <a class=\"waves-effect waves-light btn\" (click)=authService.login() *ngIf=\"!authService.authenticated()\">Log In</a>\n        <a class=\"waves-effect waves-light btn\" routerLink=\"/home\" *ngIf=\"authService.authenticated()\">Open Dashboard</a>\n        \n\n\n    <!--&lt;!&ndash; Pre Loader &ndash;&gt;-->\n    <!--<div id=\"loader-wrapper\">-->\n        <!--<div id=\"loader\"></div>-->\n\n        <!--<div class=\"loader-section section-left\"></div>-->\n        <!--<div class=\"loader-section section-right\"></div>-->\n\n    <!--</div>-->\n\n    <!--<div class=\"navbar-fixed\">-->\n        <!--<nav id=\"nav_f\" class=\"default_color\" role=\"navigation\">-->\n            <!--<div class=\"container\">-->\n                <!--<div class=\"nav-wrapper\">-->\n                    <!--<a id=\"logo-container\" href=\"#top\" class=\"brand-logo\">tcyrus</a>-->\n                    <!--<a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"mdi-navigation-menu\"></i></a>-->\n                    <!--<ul class=\"right hide-on-med-and-down\">-->\n                        <!--<li><a href=\"#intro\">About</a></li>-->\n                        <!--<li><a href=\"#work\">Portfolio</a></li>-->\n                        <!--<li><a href=\"#contact\">Contact</a></li>-->\n                    <!--</ul>-->\n                    <!--<ul id=\"nav-mobile\" class=\"right side-nav\">-->\n                        <!--<li><a href=\"#intro\">About</a></li>-->\n                        <!--<li><a href=\"#work\">Portfolio</a></li>-->\n                        <!--<li><a href=\"#contact\">Contact</a></li>-->\n                    <!--</ul>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</nav>-->\n    <!--</div>-->\n\n    <!--<div id=\"index-banner\" class=\"parallax-container valign-wrapper\">-->\n    <!--<div class=\"section no-pad-bot\">-->\n        <!--<div class=\"container\">-->\n            <!--<div class=\"row center\">-->\n            <!--<h1 class=\"header col s12 text_h cd-headline letters type\">-->\n                <!--<span>I like</span>-->\n                <!--<span class=\"cd-words-wrapper waiting\">-->\n                    <!--<b class=\"is-visible\">coding</b>-->\n                    <!--<b>Python</b>-->\n                    <!--<b>Polymer</b>-->\n                <!--</span>-->\n            <!--</h1>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n    <!--<div id=\"particles\" class=\"parallax\"></div>-->\n    <!--</div>-->\n    "
        }), 
        __metadata('design:paramtypes', [index_1.AuthService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map