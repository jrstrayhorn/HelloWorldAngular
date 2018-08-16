import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-archive-detail',
  templateUrl: './blog-archive-detail.component.html',
  styleUrls: ['./blog-archive-detail.component.css']
})
export class BlogArchiveDetailComponent implements OnInit {
  title: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.title = `Archive for ${params.get('year')}/${params.get('month')}`
      })
  }

  viewAll() {
    this.router.navigate(['/'])
  }

}
