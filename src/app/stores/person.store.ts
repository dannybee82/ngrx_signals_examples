import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { PersonState } from '../models/person-state.interface';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { Persons } from '../services/persons';
import { tapResponse } from '@ngrx/operators';
import { PersonInterface } from '../models/person.interface';

export const initialState: PersonState = {
    isLoading: true,
    persons: [],
    pageIndex: 0,
    pagerSize: 5
}

export const PersonStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, personsService = inject(Persons)) => ({
        getAllPersons: rxMethod<void>(pipe(
            switchMap(() => {
                return personsService.getAllPersons().pipe(
                    tapResponse({
                        next: (data: PersonInterface[]) => {
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