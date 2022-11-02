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
import { FooterService } from 'src/app/components/footer/footer.service';
import { ExperiencesService } from '../experiences/experiences.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss'],
})
export class PredictComponent implements OnInit {
  prediction?: PredictionOutput;
  loading: Boolean = false;
  explanation: Boolean = false;

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

  personIndex: number = 0;

  LOW_SCORE: number = 2;
  MEDIUM_SCORE: number = 1;
  HIGH_SCORE: number = 0;

  constructor(
    private predictService: PredictService,
    private readonly footerService: FooterService,
    private experiencesService: ExperiencesService
  ) {
    this.footerService.setFooterEnabled(false);
  }

  ngOnInit(): void {}

  makePrediction(): void {
    this.loading = true;
    this.predictService
      .predict(this.predictionForm.value as PredictionInput)
      .subscribe((res) => {
        this.prediction = res as PredictionOutput;
        if (this.prediction.chanceOfPassing <= 40) {
          this.personIndex = this.LOW_SCORE;
        }
        if (
          this.prediction.chanceOfPassing > 40 &&
          this.prediction.chanceOfPassing <= 60
        ) {
          this.personIndex = this.MEDIUM_SCORE;
        }
        if (this.prediction.chanceOfPassing > 60) {
          this.personIndex = this.HIGH_SCORE;
        }
      });
  }

  resetOutput(): void {
    this.prediction = undefined;
    this.loading = false;
  }

  setIndex(index: number): void {
    this.experiencesService.setIndex(index);
  }

  showExplanation() {
    this.explanation = true;
  }

  hideExplanation() {
    this.explanation = false;
  }
}
