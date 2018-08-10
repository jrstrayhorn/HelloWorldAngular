import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { AlertMessage } from './core/alert/alert-message';
import { AlertLevel } from './core/alert/warning-level';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  alertMsg = new AlertMessage(
    "Oh snap!", 
    "Change a few things up and try submitting again.", 
    AlertLevel.Danger
  );

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed: ' + eventArgs.newValue);
  }
}
