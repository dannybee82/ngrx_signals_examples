import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { PersonState } from '../models/person-state.interfate';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { tapResponse } from '@ngrx/operators';
import { Person } from '../models/person.interface';

export const initialState: PersonState = {
    isLoading: true,
    persons: [],
    pageIndex: 0,
    pagerSize: 5
}

export const PersonStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, personsService = inject(PersonsService)) => ({
        getAllPersons: rxMethod<void>(pipe(
            switchMap(() => {
                return personsService.getAllPersons().pipe(
                    tapResponse({
                        next: (data: Person[]) => {
                            patchState(store, { isLoading: false, persons: data });
                        },
                        error: () => {
                            patchState(store, { isLoading: false, persons: [] });
                        }
                    })
                )
            })
        )),
        updatePageIndex: (index: number) => {
             patchState(store, { pageIndex: index });
        },
        updatePageSize: (size: number) => {
            patchState(store, { pagerSize: size });
        }
    }))
);