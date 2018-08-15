import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';  // this deprecated
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://abcjsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
      .pipe(
        map(resp => {
          const data = <any[]>resp;
          return (data || []);
        })
      );
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        map(resp => {
          const data = <any>resp;
          return (data || {});
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          if (error.status == 400)
            return throwError(new BadInput(error.error));
          
          return throwError(new AppError(error));
        })
      );
  }

  deletePost(id) {
    return this.http.delete(`${this.url}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 404)
            return throwError(new NotFoundError()); // legitimate error

          return throwError(new AppError(error)); // log this on the server
        })
      )
    ;
  }

  // probably should be renamed to markPostAsRead or updatePostMarkAsRead
  updatePost(post) {
    return this.http.patch(`${this.url}/${post.id}`, JSON.stringify({ isRead: true }))
  }
}
