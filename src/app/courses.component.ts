
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
        <!-- style binding syntax -->
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">OK</button>
        <!-- event binding syntax -->
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Do Something</button>
        </div>
        <!-- event filtering syntax with .enter --> 
        <!-- #email is a reference to the HTML element, template variable syntax -->
        <input #email (keyup.enter)="onKeyUp(email.value)" />
    `
})
export class CoursesComponent {
    title = "List of courses"; // field
    imageUrl = "https://picsum.photos/400/200?image=2";
    colSpan = 2;
    isActive = false;

    onDivClicked() {
        console.log("Div was clicked");
    }

    onSave($event) {
        // $event is known to angular, represent the 
        // standard DOM event
        $event.stopPropagation(); // event will not bubble up
        console.log("Button was clicked", $event);
    }

    onKeyUp(email) {
        console.log(email);
    }
}