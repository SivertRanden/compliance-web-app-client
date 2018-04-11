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
  law: Law;
  regulations: Regulation[];
  subsections: Subsection[];
  data;

  constructor(private lawsService: LawsService) {}

  getLaws(): void {
    this.lawsService.getLaws().subscribe(laws => (this.laws = laws));
  }

  getLaw(id): void {
    this.lawsService.getLaw(id).subscribe(data => {
      this.law = data[0][0];
      this.regulations = data[1];
      this.subsections = data[2];
    });
    console.log(this.regulations);
    console.log(this.subsections);
  }

  ngOnInit() {}
}
