import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;  // defaults to false

  constructor() { 
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit() {
  }

}
