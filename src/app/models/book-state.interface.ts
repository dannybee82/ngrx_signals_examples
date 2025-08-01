import { Book } from "./book.interface";

export interface BookState {
    isLoading: boolean,
    books: Book[],
    collection: Book[]
}