import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError, Observable } from 'rxjs';
import { User } from '../Models/User';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url="http://localhost:3000/users";

  constructor(public http: Http) { }

  getAllUsers(){
    return this.http.get(this._url+'/GetAllUsers').pipe(map(resp=>resp.json()));
  }

}
