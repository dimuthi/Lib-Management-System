import {Component, OnInit} from '@angular/core';
import {Book} from '../models/book';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  btnSubmit: string;
  book: Book = new Book();
  books: Array<Book> = new Array<Book>();

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  addBookUi() {
    this.btnSubmit = 'Submit';
  }

  addBook(btnSubmitObj) {
    if (btnSubmitObj.innerHTML === 'Submit') {
      this.bookService.addBook(this.book).subscribe((result) => {
        this.books.push(result);
      });
    } else if (btnSubmitObj.innerHTML === 'Update') {
      this.bookService.updateBook(this.book).subscribe((result) => {
        this.getAllBooks();
      });
    }

  }

  updateBookUi(book) {
    this.btnSubmit = 'Update';
    this.book = book;
  }

  deleteBook(book) {
    this.bookService.deleteBook(book).subscribe((result) => {
      this.books.splice(this.books.indexOf(book), 1);
    });
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe((result) => {
      this.books = result;
    });
  }
}
