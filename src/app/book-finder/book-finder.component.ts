import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { BookService } from '../../app/book.service';
@Component({
  selector: 'app-book-finder',
  templateUrl: './book-finder.component.html',
  styleUrls: ['./book-finder.component.css']
})
export class BookFinderComponent implements OnInit {
  bookTitle = '';
  books: any;
  message: string;
  @ViewChild('title') title: ElementRef;
  constructor(private bookService: BookService) {}

  ngOnInit() {
  }

  private clearSearch(event) {
   this.title.nativeElement.value = '';
   event.target.style.display = 'none';
  }
  private showCancelButton(event) {
    console.log(event);
    event.target.nextSibling.childNodes[0].style.display = 'block';
  }
  private searchBooks(title) {
    if (title) {
      this.message = '';
    this.bookService
    .getBooksList(title)
    .subscribe(next => {
      console.log(next);
      this.books = next;
    }
    );
    } else {
      this.message = 'Error : please provide a search query first';
      console.log(this.message);
    }
  }
}
