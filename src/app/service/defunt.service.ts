import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Defunt } from '../models/Defunt';
import { Config } from '../config/config';

@Injectable()
export class DefuntService {

  url: string;

  constructor(private http: Http) {
     this.url = Config.url + 'Defunt';
   }
  // Create = PUT
// Retrieve = GET
// Update = POST
// Delete = DELETE

getHttp(): Observable<Array<Defunt>> {
  return  this.http.get(this.url)
  .map((res: any) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}
getHttpOne(id: string): Observable<Defunt> {
  return  this.http.get(this.url + `/${id}`)
  .map((res: any) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}
postHttp(defun: Defunt ): Observable<Defunt> {
  return  this.http.post(this.url, defun)
  .map((res: any) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}
putHttp(defunt: Defunt ): Observable<Defunt> {
    return  this.http.put(this.url, defunt)
   .map((res: any) => res.json())
   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
deleteHttp(defun: Defunt ): Observable<Object> {
  return  this.http.delete(this.url, new RequestOptions({
    body: defun
   }))
  .map((res: any) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}


}
