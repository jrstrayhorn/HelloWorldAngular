
import { Component } from '@angular/core';

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

    getTitle() {
        return this.title;
    }
}