import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Defunt } from '../models/Defunt';

@Injectable()
export class DefuntService {

  constructor(private http: Http) { }
  // Create = PUT
// Retrieve = GET
// Update = POST
// Delete = DELETE

getHttp(url: string): Observable<Array<Defunt>> {
  return  this.http.get(url)
  .map((res: any) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}
getHttpOne(url: string): Observable<Defunt> {
  return  this.http.get(url)
  .map((res: any) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}
postHttp(url: string, defun: Defunt ): Observable<Defunt> {
  return  this.http.post(url, new RequestOptions({
    body: defun
 }))
  .map((res: any) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}
putHttp(url: string, defunt: Defunt ): Observable<Defunt> {
  console.log(defunt);
    return  this.http.put(url, defunt)
   .map((res: any) => res.json())
   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
deleteHttp(url: string, defun: Defunt ): Observable<Object> {
  return  this.http.delete(url, new RequestOptions({
    body: defun
 }))
  .map((res: any) => res.json())
  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}


}
