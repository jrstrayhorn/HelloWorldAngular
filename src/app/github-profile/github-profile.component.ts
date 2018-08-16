import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // can use snapshot if 100% sure users will navigate away from component don't care about component being destroyed
    let id =this.route.snapshot.paramMap.get('id');
    console.log(id);

    // this.route.paramMap
    //   .subscribe(params => {
    //     let id = +params.get('id');
    //     console.log(id);
    //     // let id = +params.get('id'); // change strin gto id
    //     // service.get(id);
    //   })
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
