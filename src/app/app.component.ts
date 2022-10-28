import { Component } from '@angular/core';
import { FooterService } from './components/footer/footer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Human_Centered_AI_Design';
  footerEnabled: boolean = true;

  constructor(private readonly footerService: FooterService) {}

  ngOnInit() {
    this.footerService.footerEnabled.subscribe((value: boolean) => {
      this.footerEnabled = value;
    });
  }
}
