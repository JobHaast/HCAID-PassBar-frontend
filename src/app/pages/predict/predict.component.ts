import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PredictService } from './predict.service';
import { PredictionInput } from './predictionInput.model';
import { PredictionOutput } from './predictionOutput.model';
import {
  faCircleNotch,
  faArrowDown,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss'],
})
export class PredictComponent implements OnInit {
  prediction?: PredictionOutput;
  loading: Boolean = false;

  faCircleNotch = faCircleNotch;
  faArrowDown = faArrowDown;
  faCircleInfo = faCircleInfo;

  predictionForm: FormGroup = new FormGroup({
    decile1: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    decile3: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    lsat: new FormControl(null, [
      Validators.required,
      Validators.min(120),
      Validators.max(180),
    ]),
    ugpa: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(4),
    ]),
    fulltime: new FormControl(false),
    grad: new FormControl(false),
  });

  constructor(private predictService: PredictService) {}

  ngOnInit(): void {}

  makePrediction(): void {
    this.loading = true;
    this.predictService
      .predict(this.predictionForm.value as PredictionInput)
      .subscribe((res) => {
        this.prediction = res as PredictionOutput;
      });
  }

  resetOutput(): void {
    this.prediction = undefined;
    this.loading = false;
  }
}
