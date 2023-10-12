import { Component, inject } from '@angular/core';
import { AuthService } from '@badisi/ngx-auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auth-test';

  auth = inject(AuthService);

  isAuthenticated$ = this.auth.isAuthenticated$;

  logout() {
    this.auth.logout({
      redirectUrl: '/public'
    });
  }
}
