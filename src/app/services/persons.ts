import { Service } from '@angular/core';
import { PersonInterface } from '../models/person.interface';
import { delay, Observable } from 'rxjs';

@Service()
export class Persons {
  
    private _persons: PersonInterface[] = [
    { id: '1', firstname: 'Saskia', lastname: 'des Esseintes', age: 24 },
    { id: '2', firstname: 'Matilda', lastname: 'du Mal', age: 27 },
    { id: '3', firstname: 'Victoria', lastname: 'de la Mer', age: 29 },
    { id: '4', firstname: 'Jasmine', lastname: 'Jolicoeur', age: 28 },
    { id: '5', firstname: 'Abigaïl', lastname: 'de Languedoc', age: 21 },
    { id: '6', firstname: 'Caroline', lastname: 'Confection', age: 21 },
    { id: '7', firstname: 'Juliette', lastname: 'Wolpertinger', age: 23 },
    { id: '8', firstname: 'Caitlin', lastname: 'de Caen', age: 25 },
    { id: '9', firstname: 'Serana', lastname: 'du Port-Froid', age: 31 },
    { id: '10', firstname: 'Lydia', lastname: 'Lumière', age: 33 },
    { id: '11', firstname: 'Olivia', lastname: 'des Beauchamps', age: 29 },
    { id: '12', firstname: 'Camille', lastname: 'de Caen', age: 19 },
    { id: '13', firstname: 'Alicia', lastname: 'd\'Avery', age: 20 },
    { id: '14', firstname: 'Joséphine', lastname: 'de Mauvefort', age: 28 },
  ];

  getAllPersons() : Observable<PersonInterface[]> {
    return new Observable<PersonInterface[]>(observer => {
      observer.next(this._persons);
      observer.complete();
    })
    .pipe(delay(3000));
  }

}