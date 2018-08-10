import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// can also use Component, inputs metadata and list the field
// BUT this will introduce magic strings that wont get updated
// if you change a field name, so use @Input() decorator
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'], // can add one or more css styles
  styles: [
    `
    .glyphicon {
      color: green;
  }
    `
  ]
})
// angular will only pick the style listed last, it will override or ignore previous files
// which explains why star is small and not larger like defined in favorite.component.css
// really need to pick only one approach, style in template will override all other styles
// styles are scoped to the component only.. only styled in this component
export class FavoriteComponent {
  // use alias to keep contract of component stable
  @Input('is-favorite') isFavorite: boolean;  // defaults to false
  @Output('on-change') change = new EventEmitter(); // can use alias here as well

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
