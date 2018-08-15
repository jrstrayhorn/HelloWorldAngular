import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

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
          this.posts = response;
        })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.id;
          this.posts.splice(0, 0, post);
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            alert('there was a bad input.');
            // this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response);
        })
  }

  deletePost(post) {
    this.service.deletePost(445)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, 
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('this post has already been deleted.');
          else throw error;
          
        });
  }
}
