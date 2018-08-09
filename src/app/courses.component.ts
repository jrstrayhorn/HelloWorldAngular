
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses> - new custom HTML element
    template: '<h2>{{ getTitle() }}</h2>'
})
export class CoursesComponent {
    title = "List of courses"; // field

    getTitle() {
        return this.title;
    }
}