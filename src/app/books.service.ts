import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: { name: string; author: string; tags: string; quantity:number;image:string}[] = [];

  constructor() { }

  addBook = (book : { name: string; author: string; tags: string; quantity:number;image:string}) => {
    this.books.push(book)
  }
}
