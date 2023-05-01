import { Component } from "@angular/core";
import {
  frontEndTechs,
  otherLang,
  testingTechs,
} from "src/core/data/projects-data";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  frontEnd = frontEndTechs;
  testingTech = testingTechs;
  other = otherLang;
}
