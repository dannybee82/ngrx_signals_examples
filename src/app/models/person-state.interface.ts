import { PersonInterface } from "./person.interface";

export interface PersonState {
    isLoading: boolean,
    persons: PersonInterface[],
    pageIndex: number,
    pagerSize: number
}