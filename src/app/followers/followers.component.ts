import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs'
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  
  constructor(
    private route: ActivatedRoute,
    private service: FollowersService) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        let id = combined[0].get('id'); // dont have one setup
        let page = combined[1].get('page');
        let order = combined[1].get('order');
        // use service to get data from the server
        //this.service.getAll({ id, page });
        console.log(id, page, order);
  
        return this.service.getAll();
      })
    )
    .subscribe(followers => this.followers = followers)
  }

}
