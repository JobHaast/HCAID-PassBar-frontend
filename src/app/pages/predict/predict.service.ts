import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PredictionInput } from './predictionInput.model';

@Injectable({
  providedIn: 'root',
})
export class PredictService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  predict(data: PredictionInput) {
    return this.http.post(`${this.baseUrl}/predict`, data);

    // .subscribe({
    //   next: (response: any) => {
    //     const currentUser = new User(response.user);
    //     console.log(currentUser);
    //     this.setSession(response);
    //     this.isLoggedInUser.next(true);
    //     this.loggedInEmail.next(currentUser.email);
    //     this.isAdminUser.next(currentUser.admin);
    //     this.isPlainUser.next(!currentUser.admin);
    //     console.log(response);
    //     this.tokenTimer = setTimeout(() => {
    //       this.logout();
    //     }, response.exp);
    //     this.router.navigateByUrl('/dashboard');
    //     this.toastr.success('You succesfully logged in');
    //   },
    //   error: (message: any) => {
    //     console.log('error:', message);
    //     this.toastr.error('Invalid credentials');
    //   },
    // });
  }
}
