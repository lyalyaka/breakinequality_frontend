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
              <div class="card-panel z-depth-2">
                <h3 class="brand-logo teal-text text-darken-3">User Login</h3>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="username" type="text" class="validate">
                    <label for="username">First Name</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="password" type="password" class="validate">
                    <label for="password">Last Name</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col m6">
                    <button type="submit" class="waves-effect waves-light btn teal darken-3"> Login
                    </button>
                  </div>
                </div>
                
             
          
              </div>
            </div>
        </div>
        
        <!--template-->
          <!--<div class="col-md-12 text-center" style="margin-top: 10px;height: 50%">-->
            <!--<button (click)="randomizeType()" style="display: inline-block">Toggle</button>-->
          <!--</div>-->
          <div class="row container" >
            <div class="col s12 form">
              <div class="card-panel z-depth-2">
          <div id="curve_chart" ></div>
 </div>
            </div>
        </div>
        

        <!-- FILTER END-->
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
