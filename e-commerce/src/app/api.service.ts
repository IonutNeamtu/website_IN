import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://your-flask-server-url/api'; // Replace with your Flask API URL

  constructor(private http: HttpClient) {}

}
