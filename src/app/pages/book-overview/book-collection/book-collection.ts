import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { AllMaterialsModule } from '../../../all-materials.module';
import { Book } from '../../../models/book.interface';

@Component({
  selector: 'app-book-collection',
  imports: [AllMaterialsModule],
  templateUrl: './book-collection.html',
  styleUrl: './book-collection.scss'
})
export class BookCollection {

    books: InputSignal<Book[]> = input.required<Book[]>();
    remove: OutputEmitterRef<string> = output<string>();

}