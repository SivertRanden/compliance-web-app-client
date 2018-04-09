import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ThemesComponent } from './components/themes/themes.component';

import { LawsComponent } from "./components/laws/laws.component";
import { LawsService } from './services/lawservice/laws.service';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    LawsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule,
  ],
  providers: [
    LawsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
