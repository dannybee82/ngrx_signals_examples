import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { AllMaterialsModule } from '../../../all-materials.module';
import { Book } from '../../../models/book.interface';

@Component({
  selector: 'app-book-collection',
  imports: [AllMaterialsModule],
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.scss'
})
export class BookCollectionComponent {

    books: InputSignal<Book[]> = input.required<Book[]>();
    remove: OutputEmitterRef<string> = output<string>();

}