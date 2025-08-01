import { Injectable } from '@angular/core';
import { Person } from '../models/person.interface';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  
    private _persons: Person[] = [
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
  ];

  getAllPersons() : Observable<Person[]> {
    return new Observable<Person[]>(observer => {
      observer.next(this._persons);
      observer.complete();
    })
    .pipe(delay(3000));
  }

}