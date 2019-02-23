import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  url: string = environment.api;
  api_key: string = environment.api_key;

  constructor(private http: HttpClient) { }

  public getBooksList(bookTitle: string): Observable<any> {
    const params = new HttpParams()
    .set('q', bookTitle)
    .set('key', this.api_key);
    return this.http.get(this.url, {params: params})
    .pipe(
      map((res: any) => res.items ? res.items : res.totalItems)
    );
  }
}
