import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
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
        'After college I went to law school because I had dreamt of becoming a attorney. I managed to get into Harvard school of law. I studied at Harvard for about 5 years, after which I was supposed to do the bar exam. I was not sure whether I would pass the bar. I found this application on which I made a prediction. It said I had a really good chance of passing the bar. I did the exam and I managed to pass it! After passing the bar I started working at Yang Law Offices in LA. I have been working there for about 3.5 years now.',
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
        "I first started my professional career as an IT consultant. I did this job for about 3 years. I did not enjoy my time as an IT consultant. At some point I decided I wanted to do something else. I was not sure what to become. That's when I stumbled upon this application. I made a prediction that said I had a decent chance of passing the bar. I studied really hard and managed to pass the exam. I am now a corporate law attorney for Subin.",
    },
    {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      imagePath: './assets/img/this-person-does-not-exist.jpg',
      email: 'b.jones@email.com',
      fullName: 'Brenda Jones',
      location: 'Henderson, Nevada',
      job: 'Health law attorney - Sagebrush Lawyers',
      education: 'Academy of the Holy Names',
      description:
        "I had a blast at college but I did not really know what to do with my life after college. I went to the Academy of the Holy Names for a while but I didn't really fit in and dropped out. Law was something I always found interesting. I found this app and made a prediction. My prediction said I didn't have a good chance of passing the bar. It really made me doubt whether I should study law. But eventually I started studying law on my own and I managed to pass the bar!",
    },
  ];

  maxIndex: number = this.people.length;
  currentIndex: number = 0;
  private currentPerson$ = new BehaviorSubject<Object>(
    this.people[this.currentIndex]
  );
  currentPerson: Observable<Object> = this.currentPerson$.asObservable();

  constructor() {}

  nextExperience() {
    this.currentIndex++;
    if (this.currentIndex == this.maxIndex) {
      this.currentIndex = 0;
    }
    this.currentPerson$.next(this.people[this.currentIndex]);
  }

  setIndex(index: number) {
    this.currentIndex = index;
    this.currentPerson$.next(this.people[this.currentIndex]);
  }
}
