import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

// can also use Component, inputs metadata and list the field
// BUT this will introduce magic strings that wont get updated
// if you change a field name, so use @Input() decorator
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated // 99.9% of the time you really don't need to use this property
})
// ViewEnacapsulation enum allows you to change how Angular scopes styles via shadow DOM
// Emulated - Angular will emulate Shadow DOM using its own framework since some browser don't do shadow DOM
// None - Angular won't provide any template or style encapsulation
// ShadowDom - use built-in browser Shadow DOM to encapsulate styles (won't work on all browsers)
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
