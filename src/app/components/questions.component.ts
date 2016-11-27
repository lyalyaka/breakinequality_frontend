import {Component, OnInit, ChangeDetectorRef, Output}   from '@angular/core';
import {Router, ActivatedRoute}                         from '@angular/router';
import {MainService}                                    from '../_services/index';
import {FormGroup, FormBuilder}                         from '@angular/forms';
import {Observable}                                     from 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'questions',
    template: `
        <div class="row container">
            <h5 class="grey-text text-lighten-2">Active Questions</h5>
            <div class="col s12">
              <div class="card" materialize="leanModal" href="#question">
                <div class="card-content" >
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
    
            <h5 class="grey-text text-lighten-2">Archive</h5>
            <div class="col s12">
              <div class="card" materialize="leanModal" href="#question">
                <div class="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
        </div>
        
        <!-- ANSWER FORM START-->
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
        <!-- ANSWER FORM END-->
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
