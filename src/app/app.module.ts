import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFinderComponent } from './book-finder/book-finder.component';
import { BookDisplayComponent } from './book-finder/book-display/book-display.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookFinderComponent,
    BookDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
