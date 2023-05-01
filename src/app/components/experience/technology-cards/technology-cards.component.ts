import { Component , Input } from '@angular/core';


@Component({
  selector: 'app-technology-cards',
  templateUrl: './technology-cards.component.html',
  styleUrls: ['./technology-cards.component.scss']
})
export class TechnologyCardsComponent {
  @Input() techArray : any
}
