import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {

  @Input() booksData: any;
  constructor() { }

  ngOnInit() {
  }

}
