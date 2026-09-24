import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LandingPayload {
  email: string;
  firstName: string;
  userType: 'Roomer' | 'Owner';
  city: string;
  // distance?: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private http = inject(HttpClient);
  
  private apiUrl = 'https://ikama-api.onrender.com/ikama-api/v1/user'; 

  joinWaitlist(data: LandingPayload): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}