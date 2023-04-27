import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  visitFacebook() {
    let url = 'https://www.facebook.com/mohammad.darain';
    window.open(url, '_blank');
  }
  visitLinkedIn() {
    let url = 'https://www.linkedin.com/in/darain-mukarram-719394193/';
    window.open(url, '_blank');
  }
  visitTwitter() {
    let url = 'https://twitter.com/syed_darainn';
    window.open(url, '_blank');
  }

}
