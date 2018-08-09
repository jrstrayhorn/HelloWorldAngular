
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
        <input [value]="email" (keyup.enter)="onKeyUp()" />
        <!-- use Banana in a box syntax for 2-way binding -->
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <br/>
        {{ course.title | uppercase | lowercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.2-2' }} <br/>
        {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'shortDate' }}
    `
})
export class CoursesComponent {
    title = "List of courses"; // field
    imageUrl = "https://picsum.photos/400/200?image=2";
    colSpan = 2;
    isActive = false;
    email = "me@example.com"; // encapsulate data
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };

    onDivClicked() {
        console.log("Div was clicked");
    }

    onSave($event) {
        // $event is known to angular, represent the 
        // standard DOM event
        $event.stopPropagation(); // event will not bubble up
        console.log("Button was clicked", $event);
    }

    // logic for view
    onKeyUp() {
        console.log(this.email);
    }
}