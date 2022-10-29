import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  loading: Boolean = false;
  feedbackSent: Boolean = false;
  faCircleCheck = faCircleCheck;

  feedbackForm: FormGroup = new FormGroup({
    score: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    comments: new FormControl(null, [Validators.maxLength(255)]),
  });

  constructor() {}

  ngOnInit(): void {}

  sendFeedback(): void {
    this.loading = true;
    // Set timeout for "sending feedback"
    setTimeout(() => (this.feedbackSent = true), 1000);
  }

  resetOutput(): void {
    this.loading = false;
    this.feedbackSent = false;
  }
}
