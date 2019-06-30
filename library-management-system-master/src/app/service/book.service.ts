import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/book';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(environment.backend_url + '/books', book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(environment.backend_url + '/books/' + book.id, book);
  }

  deleteBook(book: Book): Observable<void> {
    return this.http.delete<void>(environment.backend_url + '/books/' + book.id);
  }

  getAllBooks(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>(environment.backend_url + '/books');
  }
}
