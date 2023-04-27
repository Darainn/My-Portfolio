import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-me',
  templateUrl: './find-me.component.html',
  styleUrls: ['./find-me.component.scss'],
})
export class FindMeComponent implements OnInit {
  ngOnInit(): void {}

  visitGithub() {
    let url = 'https://github.com/Darainn';
    window.open(url, '_blank');
  }
  visitFacebook() {
    let url = 'https://www.facebook.com/mohammad.darain';
    window.open(url, '_blank');
  }
  visitLinkedIn() {
    let url = 'https://www.linkedin.com/in/darain-mukarram-719394193/';
    window.open(url, '_blank');
  }
  visitStack() {
    let url = 'https://stackoverflow.com/users/13954106/darain-mukarram';
    window.open(url, '_blank');
  }
  visitTwitter() {
    let url = 'https://twitter.com/syed_darainn';
    window.open(url, '_blank');
  }
}
