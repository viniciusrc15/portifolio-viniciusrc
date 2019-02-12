import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  apiUrl = 'http://localhost:3000/api';
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.http = http;
  }

  sendMessage(data) {
    return new Promise((resolve, reject) => {
      return this.http.post(`${this.apiUrl}/email`, data, { headers: this.headers }).subscribe(
        d => {
          resolve(d);
        },
        error => {
          reject(error);
        }
      );
    });
  }
}
