import { Component, inject, OnInit } from '@angular/core';
import { BookStore } from '../../stores/books.store';
import { AllMaterialsModule } from '../../all-materials.module';
import { BookList } from './book-list/book-list';
import { BookCollection } from './book-collection/book-collection';

@Component({
  selector: 'app-book-overview',
  imports: [AllMaterialsModule, BookList, BookCollection],
  templateUrl: './book-overview.html',
  styleUrl: './book-overview.scss'
})
export class BookOverview implements OnInit {

  readonly bookStore = inject(BookStore);

  ngOnInit(): void {
    if(this.bookStore.isLoading()) {
      this.bookStore.getAllBooks();
    }    
  }

}