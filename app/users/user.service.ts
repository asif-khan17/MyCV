import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export  class UserService {

    url:string = '/api/user';
    constructor(public http : Http){

    }

    getData() {
        return this.http.get(this.url).map(res => res.json());
    }

}