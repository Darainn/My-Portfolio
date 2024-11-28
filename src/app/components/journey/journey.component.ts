import { Component, Input } from '@angular/core';
import { journeyData } from 'src/core/data/projects-data';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss'],
})
export class JourneyComponent {
  journeyData = journeyData;
}
