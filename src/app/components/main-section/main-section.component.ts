import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent implements OnInit {
  ngOnInit(): void { }

  viewResume() {
    let url =
      'https://drive.google.com/file/d/1GE9vUqqjl6C-hnRNEvAM5_w-nErkWVNu/view?usp=sharing';
    window.open(url, '_blank');
  }

  @ViewChild("aboutMeSection") aboutMeSectionRef!: ElementRef;

  // ngAfterViewInit() {
  //   if (this.aboutMeSectionRef) {
  //     this.aboutMeSectionRef.nativeElement.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // }
}
