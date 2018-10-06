import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError, Observable } from 'rxjs';
import { Objet } from '../Models/Objet';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ObjetService {

  private _url="http://localhost:3000/objet/";

  constructor(public http: Http) { }

  getObjectsByUser(id){
    return this.http.get(this._url+id).pipe(map(resp=>resp.json()));
  }
}
