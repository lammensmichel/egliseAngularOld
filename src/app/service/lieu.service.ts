import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Config } from '../config/config';
import { Lieu } from '../models/Lieu';


@Injectable()
export class LieuService {

  url: string;

  constructor(private http: Http) {
    this.url = Config.url + 'Lieu';
  }

  getHttp(): Observable<Array<Lieu>> {
    return  this.http.get(this.url)
    .map((res: any) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
