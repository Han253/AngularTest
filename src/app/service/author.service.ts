import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

const BASE_URL: string = 'http://192.168.0.125:8080';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  author:Author = new Author();

  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]>
  {
    return this.http.get<Author[]>(BASE_URL+'/author/')
  }

  getAuthor(id:number): Observable<Author>{
    return this.http.get<Author>(BASE_URL+'/author/id/'+id);
  }

  addAuthor(author:Author): Observable<Author>{
    return this.http.post<Author>(BASE_URL+'/author',author);
  }

  updateAuthor(author:Author): Observable<Author>{
    return this.http.put<Author>(BASE_URL+'/author/id/'+author.id,author);
  }

  deleteAuthor(id:number): Observable<any>{
    return this.http.delete<any>(BASE_URL+'/author/id/'+id);
  }
  
}
