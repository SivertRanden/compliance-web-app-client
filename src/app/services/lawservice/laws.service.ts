import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Law } from "../../classes/law";
import { Regulation } from "../../classes/regulation";
import { Subsection } from "../../classes/subsection";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LawsService {
  lawsUrl = "/laws";

  constructor(private http: HttpClient) {}

  getLaws(): Observable<Law[]> {
    return this.http.get<Law[]>(this.lawsUrl).pipe();
  }

  getLaw(id): Observable<[Law, Regulation[], Subsection[]]> {
    return this.http.get<[Law, Regulation[], Subsection[]]>(this.lawsUrl + "/" + id).pipe();
  }
}
