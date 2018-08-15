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
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
      .pipe(
        map(resp => {
          const data = <any[]>resp;
          return (data || []);
        }),
        catchError(this.handleError)
      );
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        map(resp => {
          const data = <any>resp;
          return (data || {});
        }),
        catchError(this.handleError)
      );
  }

  deletePost(id) {
    return this.http.delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError))
    ;
  }

  // probably should be renamed to markPostAsRead or updatePostMarkAsRead
  updatePost(post) {
    return this.http.patch(`${this.url}/${post.id}`, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status == 400)
      return throwError(new BadInput(error.error));

    if (error.status == 404)
      return throwError(new NotFoundError()); // legitimate error

    return throwError(new AppError(error)); // log this on the server
  }
}
