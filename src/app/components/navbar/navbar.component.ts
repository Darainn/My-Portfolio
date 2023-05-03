import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  visible: boolean = false;
  isDropDownVisible: boolean = false;

  toggleVisibility() {
    this.visible = !this.visible;
  }
  toggleDropDownVisibility() {
    this.isDropDownVisible = !this.isDropDownVisible;
    return
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth >= 768 ) {
      this.visible = false;
    }
  }

}
