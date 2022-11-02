import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FooterService } from 'src/app/components/footer/footer.service';
import { ExperiencesService } from './experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
})
export class ExperiencesComponent implements OnInit {
  faArrowDown = faArrowDown;
  state: boolean = false;
  currentPerson!: any;

  constructor(
    private readonly footerService: FooterService,
    private experiencesService: ExperiencesService
  ) {
    this.footerService.setFooterEnabled(false);
  }

  ngOnInit() {
    this.experiencesService.currentPerson.subscribe(
      (person) => (this.currentPerson = person)
    );
  }

  nextPerson(): void {
    setTimeout(() => {
      this.experiencesService.nextExperience();
    }, 750);

    this.changeState();
  }

  changeState() {
    this.state = true;
    setTimeout(() => (this.state = false), 1500);
  }
}
