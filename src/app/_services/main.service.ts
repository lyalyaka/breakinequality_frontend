import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';
import { AuthHttp }         from 'angular2-jwt';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";


@Injectable()
export class MainService {

    private mainUrl         =  'https://tnapi.herokuapp.com/';

    private headers         =  new Headers({'Content-Type': 'application/json'});
    private recordsUrl      =  this.mainUrl + 'record?component_key=eq.';
    private recUrl          =  this.mainUrl + 'record?component_key=@@.'; //contains word
    private recordsPostUrl  =  this.mainUrl + 'record?id=eq.';
    private newsPostUrl     =  this.mainUrl + 'record';

    private newsUrl         =  this.mainUrl + 'record?component_key=eq.news&order=created_date';


    constructor(private http: Http, private authHttp: AuthHttp) { }


    //to handle errors
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
