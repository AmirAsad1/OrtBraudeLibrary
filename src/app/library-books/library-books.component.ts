import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-library-books',
  templateUrl: './library-books.component.html',
  styleUrls: ['./library-books.component.css']
})
export class LibraryBooksComponent implements OnInit {

  constructor(public bookService:BooksService,private toast:NgToastService) { }
  /* istanbul ignore next */
  onclick=()=>{
    this.toast.success({detail:"Success Massege",summary:"You have Reserved the Book !",duration:5000})

  }
  ngOnInit(): void {
  }

}
