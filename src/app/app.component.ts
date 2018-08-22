import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // progress = 0;
  // timer;
  isLoading = false;

  constructor(private dialog: MatDialog) {
    // // how to setup progress over time
    // this.timer = setInterval(() => {
    //   this.progress++;
    //   if (this.progress == 100) clearInterval(this.timer);
    // }, 20);
    this.isLoading = true;
    this.getCourses()
      .subscribe(x => this.isLoading = false);
  }

  openDialog() {
    this.dialog.open(EditCourseComponent)
      .afterClosed()
      .subscribe(result => console.log(result));
  }

  getCourses() {
      return timer(2000);
  }

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

  categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' },
  ]

  selectCategory(category) {
    this.categories
      .filter(c => c != category)
      .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  onChange($event) {
    console.log($event);
  }
}