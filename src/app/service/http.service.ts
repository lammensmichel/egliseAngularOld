import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
 // obtenir
  getHttp(url: string): Observable<Object> {
    return  this.http.get(url)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  // cree
  posthttp(url: string, obj: object): Observable<Object> {
    return  this.http.post(url, obj)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
 // sup
  deletehttp(url: string): Observable<Object> {
    return  this.http.delete(url)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
