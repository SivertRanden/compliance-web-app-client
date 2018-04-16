import { Component, OnInit } from "@angular/core";
import { ThemesService } from "../../services/themeservice/themes.service";
import { Theme } from "../../classes/theme";

@Component({
  selector: "app-themes",
  templateUrl: "./themes.component.html",
  styleUrls: ["./themes.component.scss"]
})
export class ThemesComponent implements OnInit {
  themes: Theme[];

  constructor(private themesService: ThemesService) {}

  ngOnInit() {
    this.getThemes();
  }

  getThemes(): void {
    this.themesService.getThemes().subscribe(themes => (this.themes = themes));
  }
}
