import { Person } from "./person.interface";

export interface PersonState {
    isLoading: boolean,
    persons: Person[],
    pageIndex: number,
    pagerSize: number
}