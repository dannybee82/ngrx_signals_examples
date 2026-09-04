import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { AnimalData } from '../models/animal-data.interface';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { Animal } from '../services/animal';
import { tapResponse } from '@ngrx/operators';

const initialState: AnimalData = {
    allAnimals: [],
    search: '',
    foundAnimals: []
};

export const AnimalStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, animalService = inject(Animal)) => ({
        getAllAnimals: rxMethod<void>(
            pipe(
                switchMap(() => {
                    return animalService.getAllAnimals().pipe(
                        tapResponse({
                            next: (data: string[]) => {
                                patchState(store, {allAnimals: data});
                            },
                            error: () => {
                                patchState(store, {allAnimals: []});
                            }
                        })
                    )
                })
            )
        ),
        searchAnimals: (search: string) => {
            patchState(store, {search: search});
            const filteredAnimals = search === '' ? [] : structuredClone(store.allAnimals()).filter(item => item.toLowerCase().indexOf(search) > -1);
            patchState(store, {foundAnimals: filteredAnimals});
        }
    }))
);