import { Routes } from "@angular/router";
import { LawsComponent } from "./components/laws/laws.component";
import { LawsDetailsComponent } from "./components/laws-details/laws-details.component";
import { ThemesComponent } from "./components/themes/themes.component";

export const appRoutes: Routes = [
  { path: "laws", component: LawsComponent },
  { path: "laws/:id", component: LawsDetailsComponent },
  { path: "themes", component: ThemesComponent }
];
