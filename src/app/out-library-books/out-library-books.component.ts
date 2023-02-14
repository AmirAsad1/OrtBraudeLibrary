import { Component, OnInit } from '@angular/core';
import { OutBooksService } from '../out-books.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-out-library-books',
  templateUrl: './out-library-books.component.html',
  styleUrls: ['./out-library-books.component.css']
})
export class OutLibraryBooksComponent implements OnInit {
  public bookname:string=""
  api:string=""
  
  constructor(public outbooks:OutBooksService,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  /* istanbul ignore next */
  search=()=>{
    this.outbooks.books=[] //this deletes every thing after we research something else
    this.api="https://www.googleapis.com/books/v1/volumes?q="+this.bookname
    this.httpClient.get(this.api)//library the sends requests 
      .subscribe(response => {

        const booksresponse=response as {items:[{volumeInfo:{title:string;subtitle:string;averageRating:number;publisher:string;language:string;pageCount:number;ratingsCount:number;imageLinks:{smallThumbnail:string};previewLink:string} }]}
        booksresponse.items.forEach(item=>{
          this.outbooks.books.push({title:item.volumeInfo.title,subtitle:item.volumeInfo.subtitle,averageRating:item.volumeInfo.averageRating,publisher:item.volumeInfo.publisher,language:item.volumeInfo.language,pageCount:item.volumeInfo.pageCount,ratingsCount:item.volumeInfo.ratingsCount,imageLink:item.volumeInfo.imageLinks.smallThumbnail,previewLink:item.volumeInfo.previewLink})
        })

      })
  }
/* istanbul ignore next */
  goToLink=(url:string)=>{
    window.open(url, "_blank");
  }
}
