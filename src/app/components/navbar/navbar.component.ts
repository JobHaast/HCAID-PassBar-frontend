import { Component } from '@angular/core';
import {
  faPerson,
  faCheck,
  faFileLines,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  showMenu = false;
  menuItems = [
    {
      icon: faCheck,
      link: '/predict',
      title: 'Predict',
    },
    {
      icon: faPerson,
      link: '/experiences',
      title: 'Experiences',
    },
    {
      icon: faFileLines,
      link: '/explanation',
      title: 'Explanation',
    },
    {
      icon: faCircleInfo,
      link: '/privacy',
      title: 'Privacy',
    },
  ];

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
