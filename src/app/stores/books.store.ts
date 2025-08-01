import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { BookState } from '../models/book-state.interface';
import { BooksService } from '../services/books.service';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Book } from '../models/book.interface';
import { pipe, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export const initialState: BookState = {
    isLoading: true,
    books: [],
    collection: []
}

export const BookStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, booksService = inject(BooksService)) => ({
        getAllBooks: rxMethod<void>(
            pipe(
                switchMap(() => {
                    return booksService.getBooks().pipe(
                        tapResponse({
                            next: (books: Book[]) => {
                                patchState(store, {isLoading: false, books: books, collection: []});
                            },
                            error: () => {
                                patchState(store, {isLoading: false, books: [], collection: []});
                            }
                        })
                    );
                })                
            )
        ),
        addBook: (id: string) => {
            const book: Book | undefined = store.books().find(item => item.id === id);

            if(book) {
                const indexBook: number = store.books().findIndex(item => item.id === book.id);

                const books: Book[] = store.books().filter((_, index) => index !== indexBook);
                const collection: Book[] = store.collection().concat([book!]);

                patchState(store, {                 
                    books: books,
                    collection: collection
                });
            }
        },
        removeBook: (id: string) => {
             const book: Book | undefined = store.collection().find(item => item.id === id);

            if(book) {
                const indexBook: number = store.collection().findIndex(item => item.id === book.id);

                const books: Book[] = store.books().concat(book!);
                const collection: Book[] = store.collection().filter((_, index) => index !== indexBook);

                patchState(store, {  
                    books: books,
                    collection: collection
                });
            }
        }
    }))
);