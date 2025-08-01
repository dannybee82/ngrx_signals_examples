import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { CounterState } from '../models/counter-state.interface';

const initialState: CounterState = {
  count: 0,
};

export const CounterStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),  
  withMethods((store) => ({
    increment() {
      patchState(store, { count: store.count() + 1 });
    },
    decrement() {
      patchState(store, { count: store.count() - 1 });
    },
    reset() {
      patchState(store, initialState);
    },
  }))
);