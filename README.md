# NgrxSignalsExamples

Angular 22 [Angular CLI](https://github.com/angular/angular-cli) application with Angular Material and the packages: _@ngrx/store_ + _@ngrx/signals_.

This application uses the **SignalStore** - _NgRx_ \= Angular Redux. 

Advantage of the _SignalStore_: all functionality in a single file (no separate _actions, reducers, selectors_ or _effects_).

Showcase of NgRX examples - when returning back to a page it keeps it's state.

\- Counter example.

\- Book list example.

\- Show even or odd numbers.

\- Show Persons with pagination and pager.

\- Search animals and show the results.

See the images in the root of this project for examples.

## Installation + run app

**Angular 22** needs a **Node.js** version of at least _22.22.3_

**Command to install**

_npm install_

or shorter:

_npm i_

**Command to run the application:**

_ng serve --open_

or shorter:

_ng s --o_

### **Changelog:**

_September 2026_

\- Upgrade to _Angular 22_ and upgraded other packages.

\- Migrated _@Injectable_ to _@Service_.

\- Using the default: _ChangeDetectionStrategy.OnPush_ in stead of _ChangeDetectionStrategy.Eager_.

\- Using the latest file naming conventions - and deleting the old schematics from _angular.json_

\- Various small changes.

_December 2025_

\- Upgrade to _Angular 21_ and upgraded other packages.