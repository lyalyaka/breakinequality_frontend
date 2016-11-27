import { Component }    from '@angular/core';
import { AuthService }  from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'main',
    template: `
        <a class="waves-effect waves-light btn" (click)=authService.login() *ngIf="!authService.authenticated()">Log In</a>
        <a class="waves-effect waves-light btn" routerLink="/home" *ngIf="authService.authenticated()">Open Dashboard</a>
    `
})

export class MainComponent{

    constructor(private authService: AuthService) { }

}