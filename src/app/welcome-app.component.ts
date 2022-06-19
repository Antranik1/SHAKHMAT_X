import { Component } from '@angular/core';

@Component({
  selector: 'welcome-app',
  template: `
    <nav-bar></nav-bar>
    <module></module>
  `
})
export class WelcomeAppComponent {
  title = 'ng-fundamentals';
}
