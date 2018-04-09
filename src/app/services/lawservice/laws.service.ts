import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Law } from "../../classes/law";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LawsService {

  lawsUrl = "/laws";

  constructor(private http: HttpClient) { }

  getLaws(): Observable<Law[]>{
    return this.http.get<Law[]>(this.lawsUrl).pipe();
  } 

}
