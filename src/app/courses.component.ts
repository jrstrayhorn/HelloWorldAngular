
import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses', // <courses> - new custom HTML element
    template: `
        <h2>{{ title }}</h2>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" /> <!-- this is property binding syntax -->
    `
})
export class CoursesComponent {
    title = "List of courses"; // field
    imageUrl = "https://picsum.photos/400/200?image=2";
}