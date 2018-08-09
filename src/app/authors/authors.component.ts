import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;

  constructor(service: AuthorService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

  getTitle() {
    let authorCount = this.authors.length;
    return `${authorCount} Author${authorCount == 1 ? '' : 's'}`;
  }

}
