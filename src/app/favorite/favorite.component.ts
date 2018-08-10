import { Component, OnInit, Input } from '@angular/core';

// can also use Component, inputs metadata and list the field
// BUT this will introduce magic strings that wont get updated
// if you change a field name, so use @Input() decorator
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;  // defaults to false

  constructor() { 
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit() {
  }

}
