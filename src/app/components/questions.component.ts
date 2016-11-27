import {Component, OnInit, ChangeDetectorRef, Output}   from '@angular/core';
import {Router, ActivatedRoute}                         from '@angular/router';
import {MainService}                                    from '../_services/index';
import {FormGroup, FormBuilder}                         from '@angular/forms';
import {Observable}                                     from 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'questions',
    template: `
        <div class="row form-group">
            <div class="col s12">
                <ul materialize="collapsible" class="collapsible" data-collapsible="accordion">
                    <li *ngFor="let newsRecord of news">
                        <div class="collapsible-header"><i class="material-icons {{newsRecord.details.iconColor}}-text">{{newsRecord.details.icon}}</i>{{newsRecord.created_date | date:'dd-MMM-y'}} &nbsp;&nbsp; {{newsRecord.details.title}}</div>
                        <div class="collapsible-body" [innerHTML]="newsRecord.details.content"></div>
                    </li>
                </ul>
            </div>
        </div>
    `,
    providers: [MainService]
})


export class QuestionsComponent implements OnInit {

    constructor(private router: Router,
                private route: ActivatedRoute,
                private mainService: MainService
    ) { }


    ngOnInit() {

    }
}
