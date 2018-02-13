import { Injectable } from '@angular/core';
import {
   HttpInterceptor, HttpRequest, HttpHandler,
   HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
   HttpResponse, HttpUserEvent, HttpHeaders
  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    
    //throw new Error("Method not implemented.");
    const tokenHeaders = new HttpHeaders(
      {'Authorization' : 'somesampledummyrequesttoken'}
    );

    const request = req.clone(
      {
        headers : tokenHeaders
      });
    
    return next.handle(request).do(
      ev => console.log(ev),
      error => console.log(error)
    );

  }
  
  constructor() { }

}
