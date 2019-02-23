import { Component, OnInit } from '@angular/core';
import { BookService } from '../../app/book.service';
@Component({
  selector: 'app-book-finder',
  templateUrl: './book-finder.component.html',
  styleUrls: ['./book-finder.component.css']
})
export class BookFinderComponent implements OnInit {

  constructor(private bookService: BookService) {   
  }

  ngOnInit() {
    this.bookService.getBooksList('harry').subscribe(next => console.log(next));
  }

}
