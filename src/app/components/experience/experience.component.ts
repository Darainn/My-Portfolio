import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  frontEndTechs,
  otherLang,
  testingTechs,
  unitTestingTechs,
} from 'src/core/data/projects-data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  frontEnd = frontEndTechs;
  testingTech = testingTechs;
  unitTestingTech = unitTestingTechs;
  other = otherLang;

  @ViewChild('experienceSection') experienceSectionRef!: ElementRef;
}
