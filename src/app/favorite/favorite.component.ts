import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// can also use Component, inputs metadata and list the field
// BUT this will introduce magic strings that wont get updated
// if you change a field name, so use @Input() decorator
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // use alias to keep contract of component stable
  @Input('is-favorite') isFavorite: boolean;  // defaults to false
  @Output() change = new EventEmitter();

  constructor() { 
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }

  ngOnInit() {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
