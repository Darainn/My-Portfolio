import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent implements OnInit {
  ngOnInit(): void {}

  viewResume() {
    let url =
      'https://drive.google.com/file/d/1ClVKJWZmvXNo3YU1wEU3B2ZB0KzRu86F/view?usp=share_link';
    window.open(url, '_blank');
  }
}
