import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    title: 'Review applications',
    assignee: null
  }
  isChecked = true;

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ]

  color = 2;

  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);

  onChange($event) {
    console.log($event);
  }
}