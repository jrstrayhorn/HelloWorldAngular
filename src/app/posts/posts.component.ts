import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: any[];
  

  constructor(private service: PostService) {
    // dont inject Http anymore as our component should not be concerned with http
    // only concerned with working with services via dependency injection
  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
        }, 
        error => {
          alert('An unexpected error occurred.'); // real world use a toast notification, also want to log that error
          console.log(error);
        })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        }, 
        error => {
          alert('An unexpected error occurred.'); // real world use a toast notification, also want to log that error
          console.log(error);
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response.json());
        }, 
        error => {
          alert('An unexpected error occurred.'); // real world use a toast notification, also want to log that error
          console.log(error);
        })
  }

  deletePost(post) {
    this.service.deletePost(445)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, 
        (error: Response) => {
          if (error.status == 404)
            alert('this post has already been deleted.');
          else {
            alert('An unexpected error occurred.'); // real world use a toast notification, also want to log that error
            console.log(error);
          }
          
        });
  }
}
