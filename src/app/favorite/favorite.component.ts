import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isSelected: boolean;

  constructor() { 
    this.isSelected = false;
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }

  ngOnInit() {
  }

}
