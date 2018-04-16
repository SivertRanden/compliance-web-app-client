import { Component, OnInit } from "@angular/core";
import { Law } from "../../classes/law";
import { Regulation } from "../../classes/regulation";
import { Subsection } from "../../classes/subsection";
import { LawsService } from "../../services/lawservice/laws.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-laws-details",
  templateUrl: "./laws-details.component.html",
  styleUrls: ["./laws-details.component.scss"]
})
export class LawsDetailsComponent implements OnInit {
  id: number;
  law: Law;
  regulations: Regulation[];
  subsections: Subsection[];

  constructor(private lawsService: LawsService, private route: ActivatedRoute) {}

  ngOnInit() {
    //Gets the id from laws/id
    this.route.params.subscribe(params => {
      this.id = parseInt(params["id"]);
      this.getLaw();
    });
  }

  getLaw(): void {
    this.lawsService.getLaw(this.id).subscribe(data => {
      this.law = data[0];
      this.regulations = data[1];
      this.subsections = data[2];
    });
  }
}
