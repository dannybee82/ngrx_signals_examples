import { Routes } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Home } from './pages/home/home';
import { Counter } from './pages/counter/counter';
import { BookOverview } from './pages/book-overview/book-overview';
import { EvenOrOdd } from './pages/even-or-odd/even-or-odd';
import { Person } from './pages/person/person';
import { Animal } from './pages/animal/animal';

export const routes: Routes = [
    {
        path: '',
        component: Menu,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'counter',
                component: Counter
            },
            {
                path: 'books',
                component: BookOverview
            },
            {
                path: 'even-or-odd',
                component: EvenOrOdd
            },
            {
                path: 'persons',
                component: Person
            },
            {
                path: 'animals',
                component: Animal
            }
        ]
    }
];