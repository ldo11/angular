import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Angular Test Case Management</h1>
  <nav>
    <a routerLink="/admin" routerLinkActive="active">Admin</a>
    <a routerLink="/profile" routerLinkActive="active">Profile</a>
    <a routerLink="/login" routerLinkActive="active">Login</a>
    <a routerLink="/register" routerLinkActive="active">Register</a>
  </nav>
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'testcasemanagement';
}
