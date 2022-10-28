import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faArrowDown, faL } from '@fortawesome/free-solid-svg-icons';
import { FooterService } from 'src/app/components/footer/footer.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
})
export class ExperiencesComponent implements OnInit {
  faArrowDown = faArrowDown;
  state: boolean = false;

  currentIndex: number = 0;
  people = [
    {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      imagePath: './assets/img/team-2-800x800.jpg',
      email: 'j.stones@email.com',
      fullName: 'Jenna Stones',
      location: 'Los Angeles, California',
      job: 'Family law attorney - Yang Law Offices',
      education: 'Harvad school of law',
      description:
        'After college I went to law school because I had dreamt of becoming a attorney. I managed to get into Harvard school of law. I studied at Harvard for about 5 years, after which I was supposed to do the bar exam. I was not sure whether I would pass the bar. I found this application on which I made a prediction. It said I had a really good chance of passing the bar. I did the exam and I managed to pass it! After passing the bar started working at Yang Law Offices in LA. I have been working there for about 3.5 years now.',
    },
    {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      imagePath: './assets/img/square-profile-picture1.jpg',
      email: 'j.haast@email.com',
      fullName: 'Job Haast',
      location: 'New York City, New York',
      job: 'Corporate law attorney - Subin',
      education: 'University of Computer Science',
      description:
        'I first started my professional career as an IT consultant. I did this job for about 3 years. I did not enjoy my time as an IT consultant. At some point I decided I wanted to do something else. I was not sure what to become. Thats when I stumbled upon this application. I made a prediction that said I had a decent chance of passing the bar. I studied really hard and managed to pass the exam. I am now a corporate law attorney for Subin.',
    },
  ];
  maxIndex: number = this.people.length;

  constructor(private readonly footerService: FooterService) {
    this.footerService.setFooterEnabled(true);
  }

  ngOnInit() {}

  nextPerson(): void {
    setTimeout(() => {
      this.currentIndex++;
      if (this.currentIndex == this.maxIndex) {
        this.currentIndex = 0;
      }
    }, 750);

    this.changeState();
  }

  changeState() {
    this.state = true;
    setTimeout(() => (this.state = false), 1500);
  }
}
