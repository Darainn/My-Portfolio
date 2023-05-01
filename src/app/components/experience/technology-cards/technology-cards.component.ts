import { Component } from '@angular/core';
import { frontEndTechs } from 'src/core/data/projects-data';

@Component({
  selector: 'app-technology-cards',
  templateUrl: './technology-cards.component.html',
  styleUrls: ['./technology-cards.component.scss']
})
export class TechnologyCardsComponent {
  technologies = frontEndTechs
}
