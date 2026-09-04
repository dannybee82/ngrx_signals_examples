import { Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class Animal {
  
private _animals: string[] = [
    'Bearded Dragon',
    'Birds',
    'Cat',
    'Chicken',
    'Cow',
    'Dog',
    'Ferret',
    'Fish',
    'Goat',
    'Goldfish',
    'Guinea pig',
    'Hamster',
    'Hermit crabs',
    'Horse',
    'Lizard',
    'Mouse',
    'Parrot',
    'Pets',
    'Rabbit',
    'Rat',
    'Sheep',
    'Snake',
    'Turtle'
  ];
  
  getAllAnimals(): Observable<string[]> {
    return new Observable<string[]>(observer => {
      observer.next(this._animals);
      observer.complete();
    });
  }

}