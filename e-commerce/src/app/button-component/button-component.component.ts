import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})


export class ButtonComponentComponent {

  constructor(private http: HttpClient) { }

  makeRequest() {

    const apiUrl = 'http://127.0.0.1:5000/';

    this.http.get(apiUrl, { responseType: 'text' }).subscribe(
      (data) => {
        // Handle text response
        console.log('Text Response from Flask:', data);
      },
      (error) => {
        // Handle errors
        console.error('Error:', error);
      }
    );
  }
}
