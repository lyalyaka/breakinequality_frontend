import { Component }    from '@angular/core';
import { AuthService }  from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'main',
    template: `
        <p>Login:  app.127.0.0.1@gmail.com  <br>Pwd: hackathon</p>
        <a class="waves-effect waves-light btn" (click)=authService.login() *ngIf="!authService.authenticated()">Log In</a>
        <a class="waves-effect waves-light btn" routerLink="/home" *ngIf="authService.authenticated()">Open Dashboard</a>
        


    <!--&lt;!&ndash; Pre Loader &ndash;&gt;-->
    <!--<div id="loader-wrapper">-->
        <!--<div id="loader"></div>-->

        <!--<div class="loader-section section-left"></div>-->
        <!--<div class="loader-section section-right"></div>-->

    <!--</div>-->

    <!--<div class="navbar-fixed">-->
        <!--<nav id="nav_f" class="default_color" role="navigation">-->
            <!--<div class="container">-->
                <!--<div class="nav-wrapper">-->
                    <!--<a id="logo-container" href="#top" class="brand-logo">tcyrus</a>-->
                    <!--<a href="#" data-activates="nav-mobile" class="button-collapse"><i class="mdi-navigation-menu"></i></a>-->
                    <!--<ul class="right hide-on-med-and-down">-->
                        <!--<li><a href="#intro">About</a></li>-->
                        <!--<li><a href="#work">Portfolio</a></li>-->
                        <!--<li><a href="#contact">Contact</a></li>-->
                    <!--</ul>-->
                    <!--<ul id="nav-mobile" class="right side-nav">-->
                        <!--<li><a href="#intro">About</a></li>-->
                        <!--<li><a href="#work">Portfolio</a></li>-->
                        <!--<li><a href="#contact">Contact</a></li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->
        <!--</nav>-->
    <!--</div>-->

    <!--<div id="index-banner" class="parallax-container valign-wrapper">-->
    <!--<div class="section no-pad-bot">-->
        <!--<div class="container">-->
            <!--<div class="row center">-->
            <!--<h1 class="header col s12 text_h cd-headline letters type">-->
                <!--<span>I like</span>-->
                <!--<span class="cd-words-wrapper waiting">-->
                    <!--<b class="is-visible">coding</b>-->
                    <!--<b>Python</b>-->
                    <!--<b>Polymer</b>-->
                <!--</span>-->
            <!--</h1>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <!--<div id="particles" class="parallax"></div>-->
    <!--</div>-->
    `
})

export class MainComponent{

    constructor(private authService: AuthService) { }

}