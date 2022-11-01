import { Component } from '@angular/core';
import {
  faPerson,
  faCheck,
  faFileLines,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
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
      icon: faComment,
      link: '/feedback',
      title: 'Feedback',
    },
  ];

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
