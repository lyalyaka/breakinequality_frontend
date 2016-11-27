import {Component, OnInit, ChangeDetectorRef, Output}   from '@angular/core';
import {Router, ActivatedRoute}                         from '@angular/router';
import {MainService}                                    from '../_services/index';
import {FormGroup, FormBuilder}                         from '@angular/forms';
import {Observable}                                     from 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'questions',
    template: `
        <!--<div class="row form-group">-->
            <!--<div class="col s12">-->
                <!--<ul materialize="collapsible" class="collapsible" data-collapsible="accordion">-->
                    <!--<li *ngFor="let newsRecord of news">-->
                        <!--<div class="collapsible-header"><i class="material-icons {{newsRecord.details.iconColor}}-text">{{newsRecord.details.icon}}</i>{{newsRecord.created_date | date:'dd-MMM-y'}} &nbsp;&nbsp; {{newsRecord.details.title}}</div>-->
                        <!--<div class="collapsible-body" [innerHTML]="newsRecord.details.content"></div>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
        <div>Active Questions</div>
        <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-content" materialize="leanModal" href="#question">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
        </div>
        
        <div>Archive</div>
        <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-content" materialize="leanModal" href="#question">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
        </div>
        
        <!-- FILTER START-->
            <div id="question" class="modal modal-fixed-footer add-post-modal">
                 <div class="modal-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    <form action="#">
                        <div class="row">
                            <form class="col s12">
                              <div class="row">
                                <div class="input-field col s12">
                                  <textarea id="textarea1" class="materialize-textarea"></textarea>
                                  <label for="textarea1">Answer</label>
                                </div>
                              </div>
                            </form>
                        </div>
                        
                        <div class="chips chips-placeholder" materialize="material_chip" [materializeParams]="[chipsPlaceholder]"></div>
                    </form>
                 </div>
                 
                 <div class="modal-footer">
                     <a class=" modal-action modal-close waves-effect waves-green btn-flat" type="submit" (click)="addNews(myForm.value)">CANCEL</a>
                      <a class=" modal-action modal-close waves-effect waves-green btn-flat" type="submit" (click)="addNews(myForm.value)">SAVE</a>
                 </div>
            </div>
            
            <div class="row container">
    <div class="col s12 m8 form">
      <div class="card-panel z-depth-3">
        <h3 class="brand-logo teal-text text-darken-3">User Login</h3>
        <div class="row">
          <div class="input-field col s12">
            <input id="username" type="text" class="validate">
            <label for="username">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate">
            <label for="password">Password</label>
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
        
        <!-- FILTER END-->
    `,
    providers: [MainService]
})


export class QuestionsComponent implements OnInit {

    private chipsPlaceholder: Object = {
        placeholder: '+Tag',
        secondaryPlaceholder: '+Tag',
    };

    constructor(private router: Router,
                private route: ActivatedRoute,
                private mainService: MainService
    ) { }


    ngOnInit() {

    }
}
