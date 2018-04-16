import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Theme } from "../../classes/theme";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ThemesService {
  themesUrl = "/themes";

  constructor(private http: HttpClient) {}

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.themesUrl).pipe();
  }
}
