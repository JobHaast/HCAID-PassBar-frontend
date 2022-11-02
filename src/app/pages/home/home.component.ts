import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/components/footer/footer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly footerService: FooterService) {
    this.footerService.setFooterEnabled(false);
  }

  ngOnInit() {}
}
