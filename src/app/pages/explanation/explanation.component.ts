import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss'],
})
export class ExplanationComponent implements OnInit {
  faArrowDown = faArrowDown;
  state: boolean = false;

  currentIndex: number = 0;
  information = [
    {
      header: 'Who is this for?',
      description:
        'This application is mainly for american students who are in law school or who have studied some law. This app can also be used by other students.',
    },
    {
      header: 'How does this work?',
      description:
        'Our application makes predictions based on historical data of american students who did or did not pass the bar. With this data we have created an AI that has analysed the data and is able to predict whether someone will pass the bar. It does this by looking at the data you provide and compares that data with the historical data of different students who have attempted the bar test. Our model works pretty good but is not perfect, therefore our predictions should be taken with a grain of salt. You are always free to do with your prediction as you please.',
    },
    {
      header: 'How is my data used?',
      description:
        'This application uses your data to make a prediction on whether you will pass the bar. This data is not stored. The only data we store is the data you provide in the feedback from, given you have filled out this form as it is optional.',
    },
  ];

  maxIndex: number = this.information.length;

  constructor() {}

  ngOnInit(): void {}

  next(): void {
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
