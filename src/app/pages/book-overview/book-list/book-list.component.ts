import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { AllMaterialsModule } from '../../../all-materials.module';
import { Book } from '../../../models/book.interface';

@Component({
  selector: 'app-book-list',
  imports: [AllMaterialsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  readonly books: InputSignal<Book[]> = input.required<Book[]>();
  readonly add: OutputEmitterRef<string> = output<string>();

}