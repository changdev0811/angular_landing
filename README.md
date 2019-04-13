# Ng Landing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Integrating with Egret Admin template
  Folder structures are same for both projects. 
  You just need to copy home module and uncomment few lines in Egret Admin.
  1. Run 'npm install @ngu/carousel@1.4.2 --save-exact' inside Egret Admin.
  1. Replace Egret Admin's 'home' with Angular landing's 'home' folder inside app/views.
  2. Uncomment 'LandingPageService' in shared.module.ts and provide that service to SharedModule.
  3. Uncomment @import "views/landing"; inside assets/styles/scss/_views.scss


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
