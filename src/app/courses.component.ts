
import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses', // <courses> - new custom HTML element
    template: `
        <h2>{{ title }}</h2>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" /> <!-- this is property binding syntax -->
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td> <!-- this is attribute binding syntax -->
            </tr>
        </table>
        <!-- class binding syntax -->
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">OK</button>
    `
})
export class CoursesComponent {
    title = "List of courses"; // field
    imageUrl = "https://picsum.photos/400/200?image=2";
    colSpan = 2;
    isActive = false;
}