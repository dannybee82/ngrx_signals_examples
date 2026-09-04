import { Component, inject, OnInit } from '@angular/core';
import { CounterStore } from '../../stores/counter.store';
import { BookStore } from '../../stores/books.store';
import { EvenOrOddStore } from '../../stores/even-or-odd.store';
import { PersonStore } from '../../stores/person.store';
import { AnimalStore } from '../../stores/animal.store';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  readonly counterStore = inject(CounterStore);
  readonly booksStore = inject(BookStore);
  readonly evenOrOddStore = inject(EvenOrOddStore);
  readonly personStore = inject(PersonStore);
  readonly animalStore = inject(AnimalStore);

  ngOnInit(): void {}

}