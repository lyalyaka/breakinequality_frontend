import {Component, OnInit, ChangeDetectorRef, Output}   from '@angular/core';
import {Directive,ElementRef,Input} from '@angular/core';


import {Router, ActivatedRoute}                         from '@angular/router';
import {MainService}                                    from '../_services/index';
import {FormGroup, FormBuilder}                         from '@angular/forms';
import {Observable}                                     from 'rxjs/Rx';




@Component({
    moduleId: module.id,
    selector: 'account',
    template: `
        <div class="row container">
            <div class="col s12 form">
              <div class="card-panel">
                <!--<span class="card-title brand-logo teal-text text-darken-3"><h3>New Account</h3></span>-->
                <!--<h3 class="card-title brand-logo teal-text text-darken-3">New Account</h3>-->
                <!--<div class="row">-->
                  <div class="input-field col s12">
                    <input id="username" type="text" class="validate">
                    <label for="username">First Name</label>
                  </div>
                <!--</div>-->
                <!--<div class="row">-->
                  <div class="input-field col s12">
                    <input id="password" type="password" class="validate">
                    <label for="password">Last Name</label>
                  </div>
                <!--</div>-->
                <div class="row">
                  <div class="col s12">
                    <button type="submit" class="right waves-effect waves-light btn-flat"> Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    `,
    providers: [MainService]
})


export class AccountComponent implements OnInit {

    constructor(private router: Router,
                private route: ActivatedRoute,
                private mainService: MainService
    ) { }


    ngOnInit() {

    }


}
