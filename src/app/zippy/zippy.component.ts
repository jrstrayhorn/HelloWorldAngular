import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title;
  isExpanded: boolean;

  constructor() {
  }

  onClick() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded);
  }

}
