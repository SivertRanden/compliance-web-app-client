import { Component, OnInit } from "@angular/core";
import { LawsService } from "../../services/lawservice/laws.service";
import { Law } from "../../classes/law";
import { Regulation } from "../../classes/regulation";
import { Subsection } from "../../classes/subsection";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-laws",
  templateUrl: "./laws.component.html",
  styleUrls: ["./laws.component.scss"]
})
export class LawsComponent implements OnInit {
  laws: Law[];

  constructor(private lawsService: LawsService) {}

  ngOnInit() {
    this.getLaws();
  }

  getLaws(): void {
    this.lawsService.getLaws().subscribe(laws => (this.laws = laws));
  }
}
