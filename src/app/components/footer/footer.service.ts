import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private footerEnabled$ = new BehaviorSubject<boolean>(true);
  footerEnabled: Observable<boolean> = this.footerEnabled$.asObservable();

  setFooterEnabled(enabled: boolean) {
    this.footerEnabled$.next(enabled);
  }
}
