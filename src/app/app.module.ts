import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFinderComponent } from './book-finder/book-finder.component';
import { BookDisplayComponent } from './book-finder/book-display/book-display.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFinderComponent,
    BookDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
