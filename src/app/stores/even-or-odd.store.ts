import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { EvenOrOddInterface } from '../models/even-or-odd.interface';

const initialState: EvenOrOddInterface = {
    minimum: 0,
    maximum: 25,
    numbers: [],
    isEven: true
};

export const EvenOrOddStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        showNumbers: () => {
            let arr: number[] = [];

            for(let i = store.minimum(); i <= store.maximum(); i++) {
                arr.push(i);
            }

            patchState(store, {
                numbers: store.isEven() ? 
                    arr.filter(item => item % 2 === 0) :
                    arr.filter(item => item % 2 === 1)
            });
        },
        setData: (data: Partial<EvenOrOddInterface>) => {
            patchState(store, {
                minimum: data.minimum,
                maximum: data.maximum,
                isEven: data.isEven
            });
        }
    }))
);