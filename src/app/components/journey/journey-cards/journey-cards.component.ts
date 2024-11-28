import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-journey-cards',
  templateUrl: './journey-cards.component.html',
  styleUrls: ['./journey-cards.component.scss'],
})
export class JourneyCardsComponent {
  @Input() journeyData: any;
}
