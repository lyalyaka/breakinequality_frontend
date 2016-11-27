import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';
import { AuthHttp }         from 'angular2-jwt';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class MainService {

    constructor(
        private http: Http,
        private authHttp: AuthHttp
    ) { }

    //to handle errors
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
