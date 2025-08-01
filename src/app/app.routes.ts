import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/counter/counter.component';
import { BookOverviewComponent } from './pages/book-overview/book-overview.component';
import { EvenOrOddComponent } from './pages/even-or-odd/even-or-odd.component';
import { PersonComponent } from './pages/person/person.component';
import { AnimalComponent } from './pages/animal/animal.component';

export const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'counter',
                component: CounterComponent
            },
            {
                path: 'books',
                component: BookOverviewComponent
            },
            {
                path: 'even-or-odd',
                component: EvenOrOddComponent
            },
            {
                path: 'persons',
                component: PersonComponent
            },
            {
                path: 'animals',
                component: AnimalComponent
            }
        ]
    }
];