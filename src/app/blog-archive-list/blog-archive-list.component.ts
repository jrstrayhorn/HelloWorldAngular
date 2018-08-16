import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-archive-list',
  templateUrl: './blog-archive-list.component.html',
  styleUrls: ['./blog-archive-list.component.css']
})
export class BlogArchiveListComponent implements OnInit {
  blogArchives = [
    {
      year: 2017,
      month: 1
    },
    {
      year: 2017,
      month: 2
    },
    {
      year: 2017,
      month: 3
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
