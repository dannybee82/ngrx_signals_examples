import { Component, inject, OnInit } from '@angular/core';
import { BookStore } from '../../stores/books.store';
import { AllMaterialsModule } from '../../all-materials.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';

@Component({
  selector: 'app-book-overview',
  imports: [AllMaterialsModule, BookListComponent, BookCollectionComponent],
  templateUrl: './book-overview.component.html',
  styleUrl: './book-overview.component.scss'
})
export class BookOverviewComponent implements OnInit {

  readonly bookStore = inject(BookStore);

  ngOnInit(): void {
    if(this.bookStore.isLoading()) {
      this.bookStore.getAllBooks();
    }    
  }

}