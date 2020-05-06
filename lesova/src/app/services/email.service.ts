import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs/index";
import {endpoints} from "../endpoints";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private apiService : ApiService){
  }

  sendEstimationMail(data): Observable<any>{
    return this.apiService.apiPost(data, endpoints.sendEstimationMail, {});
  }

  sendSMS(headerParams,url): Observable<any>{
    return this.apiService.apiPostExternal({}, url, headerParams);
  }
}
