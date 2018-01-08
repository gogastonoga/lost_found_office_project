import {Injectable} from '@angular/core';
import { Http} from '@angular/http';
import {Profile} from './profile';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService{
    private _createprofileURL = 'http://localhost:8080/create_profile';
    constructor(private http:Http){

    }
      create(profile: Profile) {
        return this.http.post(this._createprofileURL, profile, {
        })
       .map(res =>  res.json());
      }

}