import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { AllMaterialsModule } from '../../../all-materials.module';
import { Book } from '../../../models/book.interface';

@Component({
  selector: 'app-book-list',
  imports: [AllMaterialsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})
export class BookList {

  readonly books: InputSignal<Book[]> = input.required<Book[]>();
  readonly add: OutputEmitterRef<string> = output<string>();

}