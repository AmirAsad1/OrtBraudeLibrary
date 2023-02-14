import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  imageUrl:string=""

  
  book : { name: string; author: string; tags: string; quantity:number;image:string} | undefined ;

  constructor(private bookService:BooksService,private toast:NgToastService) { }
/* istanbul ignore next */
  onselect=(event:any)=>{
    console.log(event)
    const reader =new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload=(e:any)=>{
      this.imageUrl=e.target.result
    }
  }
/* istanbul ignore next */
  onSubmit = (formDetails : NgForm) => {
    
    this.book = {
      name: formDetails.value.bookname,
      author: formDetails.value.authorname,
      tags: formDetails.value.tags,
      quantity: formDetails.value.quantity,
      image:this.imageUrl
      
    }
    console.log('onSubmit')
    console.log(this.book.image)
    this.bookService.addBook(this.book)
    formDetails.reset()
    this.toast.success({detail:"Success Massege",summary:"You have succeeded entering the book details",duration:5000})
    
   }
  ngOnInit(): void {
  }

}
