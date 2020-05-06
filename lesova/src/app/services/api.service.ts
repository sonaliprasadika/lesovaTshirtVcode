import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs/index';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/internal/operators';
import {HandleError, HttpErrorHandler} from '../http-error-handler.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private handleError: HandleError;

  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('MessageService');
  }

  // Generic Post API call for Phoenix Backend.
  apiPost(body, endpoint, headerParams): Observable<any> {

    let httpOptions = { params : headerParams };
    return this.http.post(environment.apiHost + endpoint, body,  httpOptions)
      .pipe(
        retry(0), // retry a failed request up to 2 times
        catchError(this.handleError('apiPost',body))
      );
  }

  apiPostExternal(body, endpoint, headerParams): Observable<any> {

    let hdr = {
      'Content-Type': 'application/json'
    };
    let httpOptions = { headers: hdr, params : headerParams };

    return this.http.post(endpoint, body,  httpOptions)
      .pipe(
        retry(0), // retry a failed request up to 2 times
        catchError(this.handleError('apiPost',body))
      );
  }

}
