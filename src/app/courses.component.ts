
import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses', // <courses> - new custom HTML element
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = "List of courses"; // field
    courses;

    // Logic for calling an HTTP service
        // dont do this here
        // make component tightly coupled to HTTP endpoint
        // cant write unit test against this
        // would want to create fake HTTP service
        
        // another issue
        // somewhere else we might want to get HTTP service
        // we'd have to repeat code

        // a component should not include any logic
        // except for logic for this presentation view

        // details for how to get courses should be implemented somewhere else
        // it is not the responsibility of component to get courses
        // just how to display courses

        // should use a service for this!!

        // now service has a dependency to CoursesService if we change
        // course service constructuor it's ok Angular with add new
        // courses service object
        // now unit testing.. we can supply a fake implementation
        // that doesn't used HTTP service
    constructor(service: CoursesService) {
        // new is glue here.. we've tightly coupled the courses component
        // to the CoursesService.. we won't be able to unit test this

        // in the future if we add a parameter to courses service we'd have to 
        // manually add new arguments EVERYWHERE, very fragile
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }
}