import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientXsrfModule } from "@angular/common/http";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { AppComponent } from "./app.component";
import { ThemesComponent } from "./components/themes/themes.component";

import { LawsComponent } from "./components/laws/laws.component";
import { LawsService } from "./services/lawservice/laws.service";

import { RouterModule } from "@angular/router";
import { appRoutes } from "./routerConfig";
import { LawsDetailsComponent } from "./components/laws-details/laws-details.component";
import { ThemesService } from "./services/themeservice/themes.service";

@NgModule({
  declarations: [AppComponent, ThemesComponent, LawsComponent, LawsDetailsComponent],
  imports: [BrowserModule, HttpClientModule, HttpClientXsrfModule, RouterModule.forRoot(appRoutes)],
  providers: [
    LawsService,
    ThemesService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
